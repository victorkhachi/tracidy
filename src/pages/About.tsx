import React from 'react';
import { ClipboardCheck, Users, Search, HeartHandshake, MessageSquare } from 'lucide-react';

function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Dedicated to Providing Exceptional Care
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At TracidyHomeCare, we understand that choosing the right care for your loved ones is one of life's most important decisions. Our team of dedicated caregivers brings together years of experience, unwavering compassion, and professional expertise to provide round-the-clock care that makes a real difference in people's lives.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                We take pride in our commitment to maintaining the highest standards of care while fostering independence, dignity, and quality of life for every client we serve.
              </p>
              <p style={{color:'red'}}>Although many people we help are seniors living at home, Assisting Hands® Home Care assists people of all ages, in many situations:</p>
              <p>
                <ul>
                  <li>-  post hospitalization or surgery assistance, when walking, standing or driving may be difficult</li>
                  <li>-  People with disabilities</li>
                  <li>-  Dementia / Alzheimer's patient Assistance</li>
                  <li>-  General Medical condition Assistance</li>
                </ul>
               
               </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
                alt="Caring professional with elderly patient"
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Care Process</h2>
          <div className="grid md:grid-cols-1 gap-12">
            {/* Step 1: Initial Consultation */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 bg-rose-100 rounded-full p-4">
                <ClipboardCheck className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 1: Initial Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Begin your journey with a comprehensive consultation where we listen to your needs, answer your questions, and understand your specific situation. Our care coordinators will guide you through our services and explain how we can help, ensuring you have all the information needed to make an informed decision.
                </p>
              </div>
            </div>

            {/* Step 2: Care Assessment */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 bg-rose-100 rounded-full p-4">
                <Search className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 2: Care Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced care team conducts a thorough assessment of your loved one's needs, health conditions, and living environment. We develop a personalized care plan that addresses specific requirements, preferences, and goals, ensuring comprehensive and tailored care delivery.
                </p>
              </div>
            </div>

            {/* Step 3: Caregiver Matching */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 bg-rose-100 rounded-full p-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 3: Caregiver Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  We carefully select and match caregivers based on qualifications, experience, personality, and your specific needs. Our rigorous selection process ensures that you receive care from compassionate professionals who are not only skilled but also compatible with your loved one's personality and preferences.
                </p>
              </div>
            </div>

            {/* Step 4: Continuous Support */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 bg-rose-100 rounded-full p-4">
                <HeartHandshake className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 4: Continuous Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment extends beyond initial placement. We provide ongoing supervision and support to ensure the highest quality of care. Regular quality checks, caregiver supervision, and care plan adjustments are made to maintain exceptional service standards and meet evolving needs.
                </p>
              </div>
            </div>

            {/* Step 5: Regular Updates */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 bg-rose-100 rounded-full p-4">
                <MessageSquare className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 5: Regular Updates</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain open lines of communication with families through regular updates and progress reports. Our team provides detailed feedback about care delivery, any changes in condition, and recommendations for care plan adjustments, ensuring you're always informed about your loved one's well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;