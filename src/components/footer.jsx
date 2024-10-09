'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Space Oracle</h2>
            <p className="text-white">Your trusted partner in real estate solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-white hover:text-white transition-colors">Properties</Link></li>
              <li><Link href="/about" className="text-white hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-white">123 Real Estate Street</p>
            <p className="text-white">Cityville, State 12345</p>
            <p className="text-white">Phone: (123) 456-7890</p>
            <p className="text-white">Email: info@spaceoracle.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-800 text-center text-white">
          <p>&copy; 2023 Space Oracle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}