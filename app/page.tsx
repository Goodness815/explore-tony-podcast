import Link from "next/link"
import { Play, Mic, Users, Building, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Mic className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Explore Tony</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/tony-adamu" className="text-white hover:text-purple-400 transition-colors">
                Tony Adamu
              </Link>
              <Link href="/tonyrejj" className="text-white hover:text-purple-400 transition-colors">
                TonyRejj
              </Link>
              <Link href="/podcast" className="text-white hover:text-purple-400 transition-colors">
                Podcast
              </Link>
              <Link href="/ceo" className="text-white hover:text-purple-400 transition-colors">
                CEO
              </Link>
              <Link href="/missionary" className="text-white hover:text-purple-400 transition-colors">
                Missionary
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Explore Tony
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the multifaceted world of Tony Adamu - entrepreneur, podcaster, CEO, and missionary. Join us on a
            journey of inspiration, business insights, and spiritual growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Explore Every Facet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Tony Adamu</CardTitle>
                <CardDescription className="text-gray-300">Get to know the person behind the voice</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tony-adamu">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Discover Tony</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Mic className="h-12 w-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">TonyRejj</CardTitle>
                <CardDescription className="text-gray-300">The creative and artistic side</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tonyrejj">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Explore TonyRejj</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Play className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Podcast</CardTitle>
                <CardDescription className="text-gray-300">Deep conversations and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/podcast">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Listen to Podcast</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Building className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">CEO</CardTitle>
                <CardDescription className="text-gray-300">Leading Precedence Concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/ceo">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Business Insights</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-400 mb-4" />
                <CardTitle className="text-white">Missionary</CardTitle>
                <CardDescription className="text-gray-300">Faith, service, and spiritual growth</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/missionary">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Spiritual Journey</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Mic className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Latest Episode</CardTitle>
                <CardDescription className="text-gray-300">"Building Purpose-Driven Businesses"</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <Play className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mic className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Explore Tony</span>
          </div>
          <p className="text-gray-400">© 2024 Explore Tony. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
