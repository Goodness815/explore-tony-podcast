import Link from "next/link"
import { ArrowLeft, Building, TrendingUp, Users, Award, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-white" />
              <span className="text-white">Back to Home</span>
            </Link>
            <span className="text-2xl font-bold text-white">CEO of Precedence Concepts</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Leading{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Precedence Concepts
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                As CEO of Precedence Concepts, Tony Adamu drives innovation and excellence in business consulting,
                strategic planning, and organizational development. Building companies that set new standards in their
                industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Building className="mr-2 h-5 w-5" />
                  Learn About Our Company
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-green-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Building className="h-32 w-32 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Precedence Concepts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To empower businesses and organizations to achieve unprecedented growth through innovative strategies,
                  ethical leadership, and sustainable practices that create lasting value for all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To be the leading catalyst for transformational change in business, setting new precedents for
                  excellence, innovation, and social responsibility across industries worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Integrity in all dealings</li>
                  <li>• Innovation-driven solutions</li>
                  <li>• Excellence as standard</li>
                  <li>• Sustainable growth</li>
                  <li>• Community impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Strategic Consulting</CardTitle>
                <CardDescription className="text-gray-300">Comprehensive business strategy development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Market Analysis</li>
                  <li>• Growth Planning</li>
                  <li>• Competitive Positioning</li>
                  <li>• Risk Assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Leadership Development</CardTitle>
                <CardDescription className="text-gray-300">Building exceptional leaders and teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Executive Coaching</li>
                  <li>• Team Building</li>
                  <li>• Leadership Training</li>
                  <li>• Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 hover:bg-black/60 transition-colors">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Organizational Design</CardTitle>
                <CardDescription className="text-gray-300">Structuring for success and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Process Optimization</li>
                  <li>• Culture Development</li>
                  <li>• Change Management</li>
                  <li>• Digital Transformation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Companies Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-gray-300">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Leadership Philosophy</h2>
          <blockquote className="text-2xl text-gray-300 italic mb-8">
            "True leadership is not about being in charge. It's about taking care of those in your charge and creating
            an environment where everyone can thrive and contribute their best."
          </blockquote>
          <p className="text-lg text-gray-400 mb-12">
            At Precedence Concepts, we believe that exceptional leadership combines vision with compassion, strategy
            with empathy, and results with responsibility. Our approach to business is rooted in the understanding that
            sustainable success comes from empowering people and creating value for all stakeholders.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Schedule a Leadership Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
