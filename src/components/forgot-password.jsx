'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ForgotPasswordComponent() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your backend
    setIsSubmitted(true)
  }

  return (
    (<div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-800">Space Oracle</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-800">Properties</a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-green-800 flex items-center">
                Buy <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-600 hover:text-green-800 flex items-center">
                Sell <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-600 hover:text-green-800 flex items-center">
                Rent <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-800">Log In</Button>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-800">Forgot Password</CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-800 text-white hover:bg-green-900">
                      Reset Password
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-green-600 mb-4">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email</h3>
                  <p className="text-gray-600 mb-4">
                    We've sent a password reset link to {email}. Please check your inbox and follow the instructions to reset your password.
                  </p>
                  <Button
                    className="text-green-800 hover:text-green-900"
                    variant="link"
                    onClick={() => setIsSubmitted(false)}>
                    Didn't receive the email? Try again
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link
                href="/login"
                className="text-sm text-green-800 hover:underline flex items-center">
                Back to Login <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>)
  );
}