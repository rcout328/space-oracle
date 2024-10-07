'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Users, Building, Award, TrendingUp, ChevronRight, Star, Globe, Shield } from 'lucide-react'
import Header from "./Header"
import { Footer } from "./footer"

const teamMembers = [
  { name: "Jane Doe", role: "CEO", image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1.jpg", quote: "Our mission is to revolutionize the real estate industry." },
  { name: "John Smith", role: "CTO", image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1.jpg", quote: "We're leveraging technology to create seamless experiences." },
  { name: "Alice Johnson", role: "Head of Sales", image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1.jpg", quote: "Our clients' satisfaction is our top priority." },
  { name: "Bob Williams", role: "Lead Designer", image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1.jpg", quote: "We believe in creating spaces that inspire." },
]

const achievements = [
  { icon: Users, title: "10,000+", description: "Happy Clients" },
  { icon: Building, title: "500+", description: "Properties Sold" },
  { icon: Award, title: "50+", description: "Industry Awards" },
  { icon: TrendingUp, title: "98%", description: "Customer Satisfaction" },
]

const timeline = [
  { year: "2010", event: "Space Oracle founded" },
  { year: "2015", event: "Expanded to 10 major cities" },
  { year: "2018", event: "Launched innovative AI-powered property matching" },
  { year: "2020", event: "Achieved 1 million user milestone" },
  { year: "2023", event: "Introduced virtual reality property tours" },
]

export function AboutUst() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About Space Oracle</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Space Oracle is a leading real estate company dedicated to helping people find their perfect homes and make smart property investments. With our innovative technology and expert team, we're revolutionizing the way people buy, sell, and rent properties.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold hover:bg-green-900">
            Learn More About Our Mission <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm italic text-gray-500">&quot;{member.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <achievement.icon className="h-12 w-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-4xl font-bold text-green-800">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We believe in honest, transparent dealings with all our clients and partners.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously strive to improve our services through cutting-edge technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">Our clients' needs and satisfaction are at the heart of everything we do.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to promoting eco-friendly practices in real estate.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-600 mb-8">Let Space Oracle guide you through your real estate journey.</p>
          <Button
            className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-8 py-3">
            Get Started Today
          </Button>
        </section>
      </main>
      <Footer/>
    </div>
  );
}