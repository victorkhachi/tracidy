import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle, Facebook, Instagram } from 'lucide-react';
import { PopupButton } from "react-calendly";

function Contact() {
  const [contactMethod, setContactMethod] = useState('email');
  const [mail, setMail] = useState({ name: "", email: "", phone: "",body:"" })
  const link = useRef(null)
  return (
    <div className="pt-16">
      {/* Hero Section with Book Now */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>
          {/* <button >
           
          </button> */}
          <PopupButton
            url="https://calendly.com/tracidyhomecare/30min"
            className="bg-rose-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-700 transition-colors text-lg"
            rootElement={document.getElementById("root")}
            text=" Book Now"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href="tel:+15551234567" className="flex items-center group">
                  <div className="bg-rose-100 rounded-full p-3 group-hover:bg-rose-200 transition-colors">
                    <Phone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">Mobile: +1 (443) 453-7188</p>
                    <p className="text-gray-600">Office: 301-798-2544</p>
                  </div>
                </a>

                <a href="mailto:info@tracidyhomecare.com" className="flex items-center group">
                  <div className="bg-rose-100 rounded-full p-3 group-hover:bg-rose-200 transition-colors">
                    <Mail className="h-6 w-6 text-rose-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@tracidyhomecare.com</p>
                    <p className="text-gray-600">support@tracidyhomecare.com</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="bg-rose-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                     <p className="text-gray-600">5137 CHARLINGTON CT
                    FREDERICK MD 21703</p>
                 
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <div className="flex items-start">
                <div className="bg-rose-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-rose-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="mt-2 text-gray-700">24/7 Emergency Care Available</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
              <div className="flex items-start">
                <div className="bg-rose-100 rounded-full p-3">
                  <AlertCircle className="h-6 w-6 text-rose-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">For emergencies, call our 24/7 hotline:</p>
                  <p className="text-rose-600 font-semibold text-lg">
                    <a href="tel:+15559119111"> +1 (443) 453-7188</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/tracidyhomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-rose-600" />
                </a>
                <a
                  href="https://instagram.com/tracidyhomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-rose-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              We typically respond within 24 hours during business hours.
            </p>
            <form onSubmit={(e)=>{
              e.preventDefault()

            }} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
                  type="text"
                  name='name'
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name='phone'
                  onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactMethod === 'email'}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="text-rose-600 focus:ring-rose-500"
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"

                      value="phone"
                      checked={contactMethod === 'phone'}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="text-rose-600 focus:ring-rose-500"
                    />
                    <span className="ml-2">Phone</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name='body'
                  onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                ></textarea>
              </div>
              <a ref={link} href={`mailto:support@tracidyhomecare.com?subject=Subscription&body=name:${mail.name} mail:${mail.email}  phone:${mail.phone} \n\n ${mail.body} \n contactType: contact me by ${contactMethod}`}></a>

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault(); if (mail.body && mail.email && mail.name) {
                    link?.current.click()
                  }
                }}
                className="w-full bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;