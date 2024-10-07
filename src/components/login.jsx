'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff, Facebook, Twitter, Google, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from './Header'

export function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-2xl rounded-lg overflow-hidden border border-green-100">
            <CardHeader className="bg-green-800 text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
              <p className="text-green-100 mt-2">Log in to your Space Oracle account</p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 py-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-gray-600">Remember me</Label>
                  </div>
                  <Link href="#" className="text-sm text-green-800 hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 py-3 rounded-md flex items-center justify-center text-lg font-semibold">
                  Log In <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="bg-gray-50 p-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Don't have an account? 
                  <Link href="/signup" className="text-green-800 hover:underline ml-1 font-medium">
                    Sign up
                  </Link>
                </p>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                    <Twitter className="h-6 w-6 text-blue-400" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 transition-colors">
                    <Google className="h-6 w-6 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}