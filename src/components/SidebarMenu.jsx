'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Home, Search, DollarSign, Info, User, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SidebarMenu({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-green-100 bg-opacity-30 backdrop-blur-sm transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white bg-opacity-40 backdrop-blur-md shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6 text-green-600" />
          </Button>
        </div>
        <nav className="px-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="flex items-center text-lg font-semibold text-green-800 hover:text-green-500 transition-colors">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="flex items-center text-lg font-semibold text-green-800 hover:text-green-500 transition-colors">
                <Search className="mr-2 h-5 w-5" />
                Properties
              </Link>
            </li>
            <li>
              <Link href="/buy" className="flex items-center text-lg font-semibold text-green-800 hover:text-green-500 transition-colors">
                <DollarSign className="mr-2 h-5 w-5" />
                Buy
              </Link>
            </li>
            <li>
              <Link href="/sell" className="flex items-center text-lg font-semibold text-green-800 hover:text-green-500 transition-colors">
                <DollarSign className="mr-2 h-5 w-5" />
                Sell
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center text-lg font-semibold text-green-800 hover:text-green-500 transition-colors">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </Link>
            </li>
          
              <li>
                <Link href="/login" className="flex items-center text-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition-colors px-4 py-2 rounded">
                  <LogIn className="mr-2 h-5 w-5" />
                  Log In
                </Link>
              </li>
       
          </ul>
        </nav>
      </div>
    </>
  );
}