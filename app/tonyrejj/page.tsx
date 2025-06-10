import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Music, Camera, Palette, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TonyRejjPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-white" />
              <span className="text-white">Back to Home</span>
            </Link>
            <span className="text-2xl font-bold text-white">TonyRejj</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">TonyRejj</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">The Creative Soul Behind the Vision</p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Where artistry meets innovation. TonyRejj represents the creative and artistic dimension of Tony Adamu's
            multifaceted personality - exploring music, visual arts, and creative expression.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Play className="mr-2 h-5 w-5" />
            Experience the Art
          </Button>
        </div>
      </section>

      {/* Creative Portfolio */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Creative Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Music className="h-12 w-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">Music Production</CardTitle>
                <CardDescription className="text-gray-300">
                  Original compositions and collaborative works
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-white">Elevation</span>
                    <Button size="sm" variant="ghost" className="text-pink-400">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-white">Journey Within</span>
                    <Button size="sm" variant="ghost" className="text-pink-400">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-white">New Horizons</span>
                    <Button size="sm" variant="ghost" className="text-pink-400">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Camera className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Visual Arts</CardTitle>
                <CardDescription className="text-gray-300">Photography and digital art collections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Art piece 1"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Art piece 2"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Art piece 3"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Art piece 4"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Palette className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Creative Direction</CardTitle>
                <CardDescription className="text-gray-300">Brand identity and creative consulting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold">Brand Identity</h4>
                    <p className="text-gray-400 text-sm">Visual storytelling through design</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Creative Strategy</h4>
                    <p className="text-gray-400 text-sm">Innovative approaches to communication</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Art Direction</h4>
                    <p className="text-gray-400 text-sm">Bringing visions to life</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Latest Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Featured Album: "Reflections"</CardTitle>
                <CardDescription className="text-gray-300">A journey through sound and emotion</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Reflections Album Cover"
                  width={300}
                  height={200}
                  className="rounded mb-4"
                />
                <p className="text-gray-300 mb-4">
                  An introspective collection of compositions that blend traditional and modern elements, creating a
                  unique sonic landscape that speaks to the soul.
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <Play className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Art Exhibition: "Digital Dreams"</CardTitle>
                <CardDescription className="text-gray-300">
                  Exploring the intersection of technology and humanity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Digital Dreams Exhibition"
                  width={300}
                  height={200}
                  className="rounded mb-4"
                />
                <p className="text-gray-300 mb-4">
                  A thought-provoking visual experience that challenges our perception of reality in the digital age,
                  featuring interactive installations and immersive art pieces.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">View Gallery</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
