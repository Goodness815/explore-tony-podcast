import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Globe, Users, BookOpen, HandIcon as Hands, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-white" />
              <span className="text-white">Back to Home</span>
            </Link>
            <span className="text-2xl font-bold text-white">Missionary Tony Adamu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Called to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Serve</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Beyond business and creativity lies a deeper calling - to serve communities, spread hope, and make a
                meaningful difference in the lives of others. Missionary Tony Adamu is dedicated to faith-based service
                and spiritual growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Mission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-red-400 to-orange-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Cross className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <blockquote className="text-2xl text-gray-300 italic mb-8">
            "To serve as instruments of God's love, bringing hope, healing, and transformation to communities in need,
            while fostering spiritual growth and unity among all people."
          </blockquote>
          <p className="text-lg text-gray-400">
            Our missionary work is grounded in the belief that every person deserves dignity, love, and the opportunity
            to thrive. We work tirelessly to bridge divides, heal wounds, and build stronger, more compassionate
            communities.
          </p>
        </div>
      </section>

      {/* Ministry Areas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Areas of Ministry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-red-400 mb-4" />
                <CardTitle className="text-white">Global Outreach</CardTitle>
                <CardDescription className="text-gray-300">Spreading hope across continents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• International missions</li>
                  <li>• Cross-cultural ministry</li>
                  <li>• Partnership building</li>
                  <li>• Resource mobilization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Community Development</CardTitle>
                <CardDescription className="text-gray-300">Building stronger communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Youth programs</li>
                  <li>• Family support services</li>
                  <li>• Community centers</li>
                  <li>• Leadership training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Education & Training</CardTitle>
                <CardDescription className="text-gray-300">Empowering through knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Biblical studies</li>
                  <li>• Vocational training</li>
                  <li>• Literacy programs</li>
                  <li>• Scholarship programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Hands className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Humanitarian Aid</CardTitle>
                <CardDescription className="text-gray-300">Meeting immediate needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Disaster relief</li>
                  <li>• Food distribution</li>
                  <li>• Medical missions</li>
                  <li>• Emergency assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">Spiritual Care</CardTitle>
                <CardDescription className="text-gray-300">Nurturing souls and spirits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pastoral care</li>
                  <li>• Counseling services</li>
                  <li>• Prayer ministry</li>
                  <li>• Spiritual guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Cross className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Church Planting</CardTitle>
                <CardDescription className="text-gray-300">Establishing faith communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• New church development</li>
                  <li>• Leadership development</li>
                  <li>• Community engagement</li>
                  <li>• Sustainable growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Impact Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Transforming Lives in Rural Communities</CardTitle>
                <CardDescription className="text-gray-300">Nigeria • 2023-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community outreach"
                  width={400}
                  height={200}
                  className="rounded mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Through our rural outreach program, we've established three new community centers, provided clean
                  water access to over 500 families, and trained 50 local leaders in sustainable development practices.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-400">500+</div>
                    <div className="text-sm text-gray-400">Families Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">3</div>
                    <div className="text-sm text-gray-400">Centers Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">50</div>
                    <div className="text-sm text-gray-400">Leaders Trained</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Youth Empowerment Initiative</CardTitle>
                <CardDescription className="text-gray-300">Lagos, Nigeria • 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Youth program"
                  width={400}
                  height={200}
                  className="rounded mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Our youth empowerment program has provided vocational training, mentorship, and spiritual guidance to
                  over 200 young people, with 85% finding meaningful employment or starting their own businesses.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">200+</div>
                    <div className="text-sm text-gray-400">Youth Trained</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">85%</div>
                    <div className="text-sm text-gray-400">Employment Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">15</div>
                    <div className="text-sm text-gray-400">New Businesses</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get Involved</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join us in making a difference. There are many ways to support our mission and be part of the
            transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 h-16">
              <Heart className="mr-2 h-5 w-5" />
              Donate
            </Button>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 h-16">
              <Users className="mr-2 h-5 w-5" />
              Volunteer
            </Button>
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 h-16">
              <Globe className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
