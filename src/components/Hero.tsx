import React from 'react';
import { Play, Star, Users, BookOpen, ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewChange: (view: string) => void;
}

const Hero = ({ onViewChange }: HeroProps) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-in slide-in-from-left-8 duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Join thousands of students on ShineVerse, where expert instructors deliver world-class courses designed to elevate your skills and accelerate your career.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onViewChange('register')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:rotate-1 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl"
              >
                <span className="font-semibold">Start Learning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button
                onClick={() => onViewChange('courses')}
                className="px-8 py-4 border-2 border-purple-200 text-gray-700 rounded-xl hover:border-pink-300 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold">Explore Courses</span>
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">2,500+ students</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="animate-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-700 group">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Online learning preview"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-500">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-pulse">
                        <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">Premium Courses</h3>
                      <p className="text-lg opacity-90 animate-bounce">Coming Soon</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning Experience</h3>
                  <p className="text-gray-600 mb-4">Engage with high-quality video content, live sessions, and practical assignments.</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Live Sessions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Resources</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-80 animate-pulse hover:animate-spin transition-all duration-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-70 animate-bounce delay-1000 hover:animate-ping"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-60 animate-bounce delay-500"></div>
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Expert Instructors', icon: Users },
            { number: '200+', label: 'Premium Courses', icon: BookOpen },
            { number: '2.5K+', label: 'Happy Students', icon: Star },
            { number: '98%', label: 'Success Rate', icon: ArrowRight }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 hover:scale-105 animate-in fade-in-50 duration-500 border border-purple-100 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-pink-600 mx-auto mb-4 group-hover:scale-125 group-hover:text-purple-600 transition-all duration-300" />
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{stat.number}</div>
              <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;