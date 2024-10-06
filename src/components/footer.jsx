import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ʌ Luxury Homes</h3>
            <p className="mb-4">Creating dream homes with precision and excellence since 2000.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-500"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-yellow-500"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-yellow-500"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-yellow-500"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-500">Home</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Properties</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Services</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-500">Property Management</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Renovation</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Interior Design</Link></li>
              <li><Link href="#" className="hover:text-yellow-500">Real Estate Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@luxuryhomes.com" className="hover:text-yellow-500">info@luxuryhomes.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-yellow-500">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Luxury Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Luxury Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}