"use client";
import { Headphones, Radio, Volume2, Play } from "lucide-react";
import { useState, useEffect } from "react";

export default function PodcastLoading({ message = "Loading podcast..." }) {
  const [dots, setDots] = useState("");
  const [currentTip, setCurrentTip] = useState(0);

  const loadingTips = [
    "Tuning into the perfect frequency...",
    "Buffering amazing content...",
    "Preparing your audio experience...",
    "Almost ready to play...",
    "Getting everything just right...",
  ];

  // Animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Rotating tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % loadingTips.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl animate-pulse"></div>

        {/* Main loading card */}
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Central loading animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 w-24 h-24 border-4 border-indigo-500/20 rounded-full animate-spin border-t-indigo-500"></div>

              {/* Middle pulsing ring */}
              <div className="absolute inset-2 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-ping"></div>

              {/* Inner icon container */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="relative">
                  <Headphones className="w-8 h-8 text-indigo-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Floating sound waves */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-indigo-400/60 rounded-full animate-pulse"></div>
                  <div className="w-1 h-6 bg-indigo-400/40 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-3 bg-indigo-400/60 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading text with animated dots */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Radio className="w-6 h-6 text-indigo-400 animate-pulse" />
              {message.replace("...", "")}
              {dots}
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed transition-all duration-500 ease-in-out">
              {loadingTips[currentTip]}
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
            </div>
          </div>

          {/* Loading features */}
          <div className="space-y-3 mb-6">
            {[
              { icon: Volume2, text: "Optimizing audio quality", delay: "0s" },
              {
                icon: Play,
                text: "Preparing playback controls",
                delay: "0.5s",
              },
              { icon: Headphones, text: "Loading episode data", delay: "1s" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-300 animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-indigo-400 animate-pulse" />
                </div>
                <span className="text-sm">{item.text}</span>
                <div className="ml-auto flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun fact */}
          <div className="bg-slate-900/30 border border-slate-700/30 rounded-lg p-4">
            <p className="text-slate-400 text-xs text-center">
              💡 <span className="text-indigo-300">Did you know?</span> The
              first podcast was created in 2003 by Dave Winer!
            </p>
          </div>
        </div>

        {/* Floating audio visualizer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-0.5 bg-gradient-to-t from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: "40%",
                height: `${20 + Math.sin(i) * 10}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
