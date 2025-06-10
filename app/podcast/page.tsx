"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Play,
  Download,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  Loader2,
} from "lucide-react";

type PodcastInfo = {
  title: string;
  description: string;
  author: string;
  image: string;
  language: string;
};

type Episode = {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  episodeNumber: string | number;
  season: string;
  enclosureUrl: string;
  spotifyEmbedUrl: string;
  category: string;
  image: string;
};

export default function PodcastPage() {
  const [podcastData, setPodcastData] = useState<PodcastInfo | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [playingEpisode, setPlayingEpisode] = useState<Episode | null>(null);
  const [audioLoading, setAudioLoading] = useState<boolean>(false);

  console.log("podcastData", podcastData);
  console.log("episodes", episodes);
  console.log(playingEpisode);
  useEffect(() => {
    fetchPodcastData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPodcastData = async () => {
    try {
      setLoading(true);
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const rssUrl = "https://anchor.fm/s/1000e7f58/podcast/rss";
      const response = await fetch(proxyUrl + encodeURIComponent(rssUrl));
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const channel = xmlDoc.querySelector("channel");
      const podcastInfo: PodcastInfo = {
        title:
          channel?.querySelector("title")?.textContent ||
          "The Bridge | Podcast",
        description: channel?.querySelector("description")?.textContent || "",
        author:
          channel?.querySelector("itunes\\:author, author")?.textContent ||
          "Tony Adamu",
        image:
          // Use getElementsByTagName for itunes:image (cross-browser)
          channel?.getElementsByTagName("itunes:image")[0]?.getAttribute("href") ||
          channel?.querySelector("itunes\\:image")?.getAttribute("href") ||
          "",
        language: channel?.querySelector("language")?.textContent || "en",
      };
      const items = xmlDoc.querySelectorAll("item");
      const episodeList: Episode[] = Array.from(items).map((item, index) => {
        const title = item.querySelector("title")?.textContent || "";
        const description =
          item.querySelector("description")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        const duration =
          item.querySelector("itunes\\:duration")?.textContent || "";
        const episodeNumber =
          item.querySelector("itunes\\:episode")?.textContent ||
          items.length - index;
        const season =
          item.querySelector("itunes\\:season")?.textContent || "1";
        const enclosureUrl =
          item.querySelector("enclosure")?.getAttribute("url") || "";
        const guid = item.querySelector("guid")?.textContent || "";
        const spotifyEmbedUrl = convertToSpotifyEmbed(enclosureUrl, guid);
        // Get episode image
        let image =
          item.getElementsByTagName("itunes:image")[0]?.getAttribute("href") ||
          item.querySelector("itunes\\:image")?.getAttribute("href") ||
          item.querySelector("image")?.textContent ||
          "";
        // fallback to podcast image if not found
        if (!image) image = podcastInfo.image;
        return {
          id: index + 1,
          title: cleanHtml(title),
          description: cleanHtml(description),
          duration: formatDuration(duration),
          date: formatDate(pubDate),
          episodeNumber,
          season,
          enclosureUrl,
          spotifyEmbedUrl,
          category: getCategoryFromDescription(description),
          image,
        };
      });
      setPodcastData(podcastInfo);
      setEpisodes(episodeList);
      setLoading(false);
    } catch (err: any) {
      console.error("Error fetching podcast data:", err);
      setError(err.message || "Unknown error");
      setLoading(false);
    }
  };

  const cleanHtml = (text: string): string => {
    if (!text) return "";
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.textContent || div.innerText || "";
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDuration = (duration: string): string => {
    if (!duration) return "";
    if (duration.includes(":")) {
      const parts = duration.split(":");
      if (parts.length === 3) {
        const hours = parseInt(parts[0]);
        const minutes = parseInt(parts[1]);
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes} min`;
      } else if (parts.length === 2) {
        return `${parseInt(parts[0])} min`;
      }
    }
    return duration;
  };

  const getCategoryFromDescription = (description: string): string => {
    const text = description.toLowerCase();
    if (text.includes("mission") || text.includes("honor")) return "Mission";
    if (
      text.includes("faith") ||
      text.includes("spiritual") ||
      text.includes("biblical")
    )
      return "Faith";
    if (text.includes("business") || text.includes("entrepreneur"))
      return "Business";
    if (text.includes("leadership")) return "Leadership";
    return "General";
  };

  const convertToSpotifyEmbed = (
    enclosureUrl: string,
    guid: string
  ): string => {
    if (enclosureUrl && enclosureUrl.includes("anchor.fm")) {
      const match = enclosureUrl.match(/play\/(\d+)/);
      if (match) {
        return `https://open.spotify.com/embed/episode/${guid}`;
      }
    }
    return `https://open.spotify.com/embed/show/1000e7f58`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading podcast data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">
          Error loading podcast: {error}
        </div>
      </div>
    );
  }

  // Handler for Play Latest Episode button
  const handlePlayLatest = () => {
    if (episodes.length > 0) {
      setPlayingEpisode(episodes[0]);
    }
  };

  // Handler for download button
  const handleDownload = (url: string, title: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = title.replace(/[^\w\s-]/g, "") + ".mp3";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button className="flex items-center space-x-2 text-white hover:text-gray-300">
              <ArrowLeft className="h-6 w-6" />
              <span>Back to Home</span>
            </button>
            <span className="text-2xl font-bold text-white">
              {podcastData?.title || "The Bridge Podcast"}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                {podcastData?.title || "The Bridge"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Podcast
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {podcastData?.description?.substring(0, 300) ||
                  "A podcast that explores the human experience through faith and spirituality. Join us as we navigate life's challenges and discover purpose."}
                ...
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
                  onClick={handlePlayLatest}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Play Latest Episode
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg flex items-center justify-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Subscribe on Spotify
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                  {episodes[0]?.image ? (
                    <img
                      src={episodes[0].image}
                      alt="Podcast Cover"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : podcastData?.image ? (
                    <img
                      src={podcastData.image}
                      alt="Podcast Cover"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-white text-lg font-bold">
                      The Bridge
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">
                {episodes.length}+
              </div>
              <div className="text-gray-300">Episodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                Growing
              </div>
              <div className="text-gray-300">Community</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">Multi</div>
              <div className="text-gray-300">Platform</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Faith</div>
              <div className="text-gray-300">Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Latest Episodes
          </h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-black/40 border border-white/20 rounded-lg hover:bg-black/60 transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Episode Image */}
                    {/* <div className="w-full max-w-[120px] flex-shrink-0 mb-4 lg:mb-0">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="rounded-lg w-full h-[120px] object-cover bg-slate-700"
                      />
                    </div> */}
                    {/* Episode Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                          {episode.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {episode.date}
                        </div>
                        {episode.duration && (
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {episode.duration}
                          </div>
                        )}
                      </div>
                      <h3 className="text-white text-xl mb-2 font-semibold">
                        {episode.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-4 line-clamp-3">
                        {episode.description.substring(0, 200)}...
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded flex items-center justify-center"
                          onClick={() => setPlayingEpisode(episode)}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Play Episode
                        </button>
                        <button
                          className="border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded flex items-center justify-center"
                          onClick={() =>
                            handleDownload(episode.enclosureUrl, episode.title)
                          }
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Never Miss an Episode
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Subscribe to get notified when new episodes are released
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="https://open.spotify.com/show/5Fh6SYR2Fgw31V59ZEcZ4c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/the-bridge-podcast/id1793902929"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              Apple Podcasts
            </a>
            <a
              href="https://music.amazon.com/podcasts/172165d1-0885-4fca-b996-618f8ff51e83"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              Amazon Music
            </a>
            <a
              href="https://www.iheart.com/podcast/269-the-bridge-podcast-263312800/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              iHeart
            </a>
          </div>
        </div>
      </section>

      {/* Global Custom Audio Player */}
      {playingEpisode && (
        <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-white/10 z-50 flex flex-col items-center justify-center py-4 px-2">
          <div className="flex items-center gap-4 max-w-4xl w-full">
            <img
              src={playingEpisode.image || podcastData?.image}
              alt="Podcast Cover"
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold truncate">
                {playingEpisode.title}
              </div>
              <div className="text-gray-400 text-sm truncate">
                {podcastData?.title}
              </div>
            </div>
            <button
              className="text-white hover:text-red-400 px-2"
              onClick={() => setPlayingEpisode(null)}
              title="Close Player"
            >
              ✕
            </button>
          </div>
          <div className="w-full flex justify-center mt-2 relative">
            {audioLoading && (
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                <Loader2 className="animate-spin text-indigo-400 w-8 h-8" />
              </div>
            )}
            <audio
              src={playingEpisode.enclosureUrl}
              controls
              autoPlay
              className="w-full max-w-2xl bg-slate-800 rounded-lg outline-none"
              style={{ accentColor: "#6366f1" /* indigo-500 */ }}
              onLoadStart={() => setAudioLoading(true)}
              onCanPlayThrough={() => setAudioLoading(false)}
              onPlaying={() => setAudioLoading(false)}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
}
