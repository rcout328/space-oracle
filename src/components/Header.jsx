'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-800">Space Oracle</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green-800">Home</Link>
          <Link href="/properties" className="text-gray-600 hover:text-green-800">Properties</Link>
          <Link href="/buy" className="text-gray-600 hover:text-green-800">Buy</Link>
          <Link href="/sell" className="text-gray-600 hover:text-green-800">Sell</Link>
          <Link href="/about" className="text-gray-600 hover:text-green-800">About Us</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-green-800">Log In</Button>
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}