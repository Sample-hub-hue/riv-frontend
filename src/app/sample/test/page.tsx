'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040924] p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 items-center gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 w-full max-w-xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Rively"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#040924] mb-2">
              Create your account
            </h1>
            <p className="text-gray-600">
              Let's get you started real quick
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Re-enter your Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#000080] focus:ring-[#000080] transition-colors duration-200"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                By creating an account, I agree with your{' '}
                <Link href="/terms" className="text-[#000080] hover:underline">
                  Terms and conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#040924] text-white py-3 rounded-lg hover:bg-[#000080] transition-colors duration-200"
            >
              Sign up
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              Already an user?{' '}
              <Link href="/login" className="text-[#000080] hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>

        {/* Testimonials Section */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <div className="absolute w-[800px] h-[800px] border-2 border-gray-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-[600px] h-[600px] border-2 border-gray-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            <div className="absolute top-20 left-20 bg-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
              <p className="text-lg font-medium">
                Airtable and Notion are two highly rated project
              </p>
              <p className="text-sm text-gray-500 mt-2">-India Today</p>
            </div>
            <div className="absolute top-60 right-0 bg-[#040924] text-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
              <p className="text-lg font-medium">
                Moon Pay now offers Tether (ERC -20) swaps with no processing fee and has earned an ISO 27001 Certification.
              </p>
              <p className="text-sm text-yellow-400 mt-2">- The Hindu</p>
            </div>
            <div className="absolute bottom-20 left-40 bg-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
              <p className="text-lg font-medium">
                Airtable and Notion are two highly rated project management software solutions.
              </p>
              <p className="text-sm text-gray-500 mt-2">-India Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
