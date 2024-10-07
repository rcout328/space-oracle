'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ChevronDown, Upload, DollarSign, Home, BarChart, Users, Camera, MapPin, Calendar } from 'lucide-react'
import Header from './Header'
import { Footer } from './footer'

export function SellPropertiesComponent() {
  const [images, setImages] = useState([])

  const handleImageUpload = (event) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Sell Your Property</h1>
          <p className="text-xl mb-6">List your property with Space Oracle and reach thousands of potential buyers.</p>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800">Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="propertyType" className="text-sm font-medium text-gray-700">Property Type</Label>
                      <Select>
                        <SelectTrigger id="propertyType" className="w-full mt-1">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="price" className="text-sm font-medium text-gray-700">Price</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input id="price" type="number" className="pl-10" placeholder="Enter price" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
                    <div className="relative mt-1">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input id="address" className="pl-10" placeholder="Enter full address" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="bedrooms" className="text-sm font-medium text-gray-700">Bedrooms</Label>
                      <Input id="bedrooms" type="number" className="mt-1" placeholder="Number of bedrooms" />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms" className="text-sm font-medium text-gray-700">Bathrooms</Label>
                      <Input id="bathrooms" type="number" className="mt-1" placeholder="Number of bathrooms" />
                    </div>
                    <div>
                      <Label htmlFor="area" className="text-sm font-medium text-gray-700">Area (sq ft)</Label>
                      <Input id="area" type="number" className="mt-1" placeholder="Total area" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">Description</Label>
                    <Textarea id="description" className="mt-1" placeholder="Describe your property" rows={4} />
                  </div>
                  <div>
                    <Label htmlFor="images" className="text-sm font-medium text-gray-700">Upload Images</Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="images" className="relative cursor-pointer bg-white rounded-md font-medium text-green-800 hover:text-green-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                            <span>Upload files</span>
                            <input id="images" name="images" type="file" className="sr-only" multiple onChange={handleImageUpload} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                    {images.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{images.length} file(s) selected</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Switch id="terms" />
                    <Label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      I agree to the <a href="#" className="text-green-800 hover:underline">terms and conditions</a>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-green-800 text-white hover:bg-green-900 transition-colors">
                    List My Property
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-800">Selling Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Camera className="h-5 w-5 mr-3 text-green-800" />
                    <span>Stage your home for better photos</span>
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-3 text-green-800" />
                    <span>Price competitively based on market trends</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-3 text-green-800" />
                    <span>Highlight unique features of your property</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-green-800" />
                    <span>Be flexible with showing times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-700 to-green-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Why Sell with Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 mr-3" />
                    <span>Access to a large network of potential buyers</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 mr-3" />
                    <span>Expert market analysis and pricing strategy</span>
                  </li>
                  <li className="flex items-center">
                    <Camera className="h-5 w-5 mr-3" />
                    <span>Professional photography and virtual tours</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-white text-green-800 hover:bg-gray-100 transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      
      </main>
      <Footer/>
    </div>
  );
}