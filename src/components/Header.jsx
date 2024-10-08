'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-800">Space Oracle</Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex space-x-6 justify-center w-full absolute left-0 right-0">
            <Link href="/" className="text-gray-600 hover:text-green-800 transition-colors">Home</Link>
            <Link href="/#about" className="text-gray-600 hover:text-green-800 transition-colors">About Us</Link>
            <Link href="/proper" className="text-gray-600 hover:text-green-800 transition-colors">Properties</Link>
          </nav>
          
          {/* Desktop and Mobile Buttons */}
          <div className="flex items-center space-x-4">
            {/* Removed Log In button */}
            {/* Mobile Menu Button */}
            <Button variant="ghost" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}