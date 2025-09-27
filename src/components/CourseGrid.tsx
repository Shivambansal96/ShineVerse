import React from 'react';
import { Play, Clock, Users, Star, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'available' | 'coming-soon';
}

interface CourseGridProps {
  onCourseClick?: (courseId: string) => void;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world projects and launch your career.',
    instructor: 'Sarah Johnson',
    duration: '12 weeks',
    students: 1250,
    rating: 4.9,
    price: '$199',
    level: 'Beginner',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Advanced Python & Data Science',
    description: 'Deep dive into Python programming, machine learning, and data analysis with real industry projects.',
    instructor: 'Dr. Michael Chen',
    duration: '10 weeks',
    students: 890,
    rating: 4.8,
    price: '$249',
    level: 'Advanced',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, content creation, and analytics to grow any business online.',
    instructor: 'Emma Rodriguez',
    duration: '8 weeks',
    students: 2100,
    rating: 4.7,
    price: '$149',
    level: 'Intermediate',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description: 'Create beautiful, user-friendly interfaces with modern design principles and industry-standard tools.',
    instructor: 'Alex Kim',
    duration: '6 weeks',
    students: 1580,
    rating: 4.9,
    price: '$179',
    level: 'Beginner',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description: 'Build native iOS and Android apps using React Native and Flutter. Deploy to app stores.',
    instructor: 'James Wilson',
    duration: '14 weeks',
    students: 950,
    rating: 4.8,
    price: '$299',
    level: 'Intermediate',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Business Strategy & Leadership',
    description: 'Develop strategic thinking, leadership skills, and business acumen for career advancement.',
    instructor: 'Lisa Thompson',
    duration: '8 weeks',
    students: 1750,
    rating: 4.6,
    price: '$199',
    level: 'Advanced',
    status: 'coming-soon',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const CourseGrid = ({ onCourseClick }: CourseGridProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800';
      case 'Intermediate': return 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800';
      case 'Advanced': return 'bg-gradient-to-r from-red-100 to-pink-100 text-pink-800';
      default: return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top-4 duration-700">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-pink-500 mr-2" />
            <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
            <Sparkles className="w-4 h-4 text-indigo-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Premium Courses
            </span>
            <span className="block text-2xl sm:text-3xl bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent mt-2">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're crafting exceptional learning experiences with industry experts. Get ready for courses that will transform your career and skills.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => onCourseClick && onCourseClick(course.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-3 hover:rotate-1 animate-in fade-in-50 duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-2 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500/30 to-violet-600/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-pulse">
                      <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-lg font-semibold animate-bounce">Click to Explore</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{course.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-200">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 group-hover:text-pink-500 transition-colors duration-200" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 group-hover:text-purple-500 transition-colors duration-200" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                    by {course.instructor}
                  </div>
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-lg hover:from-pink-200 hover:to-purple-200 hover:scale-105 transition-all duration-300 group/btn transform">
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Start Learning</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Be the First to Know
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and get early access to premium courses with exclusive launch discounts! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;