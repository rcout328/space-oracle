'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, Google } from 'lucide-react'
import Link from 'next/link'
import Header from './Header'

export function SignupComponent() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-800">Create Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input id="name" type="text" placeholder="Enter your full name" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the <Link href="#" className="text-green-800 hover:underline">Terms of Service</Link> and <Link href="#" className="text-green-800 hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-green-800 text-white hover:bg-green-900">
                    Sign Up
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <div className="text-sm text-gray-600 mb-4">
                Already have an account? 
                <Link href="/login" className="text-green-800 hover:underline ml-1">
                  Log in
                </Link>
              </div>
              <div className="w-full border-t border-gray-300 my-4"></div>
              <div className="text-sm text-gray-600 mb-4">Or sign up with</div>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <Google className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}