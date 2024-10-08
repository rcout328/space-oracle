'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from '@/lib/supabaseClient'
import { User, Mail, Phone, MessageSquare } from 'lucide-react'

export function InquiryForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { data, error } = await supabase
        .from('inquiry')
        .insert([
          { 
            ...formData,
            inquiry_date: new Date().toISOString(),
            status: 'Pending'
          }
        ])

      if (error) throw error
      
      alert('Your inquiry has been submitted successfully!')
      onClose()
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('There was an error submitting your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="pl-10 py-3"
        />
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <div className="relative">
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="pl-10 py-3"
        />
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <div className="relative">
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="pl-10 py-3"
        />
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <div className="relative">
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="pl-10 py-3 min-h-[100px]"
        />
        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 text-lg font-semibold transition-colors duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}