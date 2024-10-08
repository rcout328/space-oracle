'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Home, Search, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SidebarMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-green-800">Menu</h2>
          <Button variant="ghost" onClick={onClose} className="hover:bg-green-100">
            <X className="h-6 w-6 text-green-800" />
          </Button>
        </div>
        <nav className="px-6 py-8">
          <ul className="space-y-6">
            <li>
              <Link href="/" className="flex items-center text-lg font-medium text-green-800 hover:text-green-600 transition-colors group">
                <Home className="mr-4 h-6 w-6 group-hover:text-green-600" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/proper" className="flex items-center text-lg font-medium text-green-800 hover:text-green-600 transition-colors group">
                <Search className="mr-4 h-6 w-6 group-hover:text-green-600" />
                Properties
              </Link>
            </li>
            <li>
              <Link href="/#about" className="flex items-center text-lg font-medium text-green-800 hover:text-green-600 transition-colors group">
                <Info className="mr-4 h-6 w-6 group-hover:text-green-600" />
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <p className="text-sm text-green-800 text-center">© 2024 Space Oracle. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}