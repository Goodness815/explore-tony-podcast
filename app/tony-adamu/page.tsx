import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TonyAdamuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-white" />
              <span className="text-white">Back to Home</span>
            </Link>
            <span className="text-2xl font-bold text-white">Tony Adamu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Tony Adamu
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Entrepreneur, visionary, and passionate advocate for positive change. Tony Adamu brings together
                business acumen, spiritual wisdom, and creative innovation to inspire and lead communities toward
                meaningful transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Tony Adamu"
                    width={300}
                    height={300}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Tony</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  With over a decade of experience in entrepreneurship and leadership, Tony has built multiple
                  successful ventures while maintaining a strong commitment to community service and spiritual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To bridge the gap between business success and meaningful impact, creating opportunities for others
                  while building sustainable, purpose-driven organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A world where business leaders prioritize both profit and purpose, creating lasting positive change in
                  their communities and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to explore new opportunities or discuss potential collaborations?
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">tony@exploretony.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
