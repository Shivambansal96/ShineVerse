import React from 'react';
import { BookOpen, Play, Clock, TrendingUp, Star, Calendar, Users, Award, ChevronRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface DashboardProps {
  onCourseClick?: (courseId: string) => void;
}

const Dashboard = ({ onCourseClick }: DashboardProps) => {
  const { user } = useAuth();
  
  const isInstructor = user?.role === 'instructor';

  const handleCourseClick = (courseId: string) => {
    if (onCourseClick) {
      onCourseClick(courseId);
    }
  };

  const courses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      progress: 65,
      duration: '12 weeks',
      students: isInstructor ? 127 : undefined,
      nextLesson: 'Advanced React Hooks'
    },
    {
      id: '2',
      title: 'Advanced Python & Data Science',
      progress: 30,
      duration: '10 weeks',
      students: isInstructor ? 89 : undefined,
      nextLesson: 'Machine Learning Basics'
    },
    {
      id: '3',
      title: 'Digital Marketing Mastery',
      progress: 90,
      duration: '8 weeks',
      students: isInstructor ? 210 : undefined,
      nextLesson: 'Analytics & Reporting'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            {isInstructor 
              ? 'Manage your courses and track student progress' 
              : 'Continue your learning journey with ShineVerse'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {(isInstructor ? [
            { title: 'Total Students', value: '247', icon: Users, color: 'purple', trend: '+12%' },
            { title: 'Active Courses', value: '8', icon: BookOpen, color: 'blue', trend: '+2' },
            { title: 'Total Revenue', value: '$12,450', icon: TrendingUp, color: 'green', trend: '+18%' },
            { title: 'Average Rating', value: '4.8', icon: Star, color: 'yellow', trend: '+0.2' }
          ] : [
            { title: 'Courses Enrolled', value: '3', icon: BookOpen, color: 'purple', trend: '+1' },
            { title: 'Hours Learned', value: '42', icon: Clock, color: 'blue', trend: '+8h' },
            { title: 'Certificates', value: '2', icon: Award, color: 'green', trend: '+1' },
            { title: 'Average Score', value: '89%', icon: Star, color: 'yellow', trend: '+5%' }
          ]).map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in-50 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                <span className={`text-sm font-medium text-${stat.color === 'green' ? 'green' : 'purple'}-600 bg-${stat.color === 'green' ? 'green' : 'purple'}-50 px-2 py-1 rounded-full`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-in slide-in-from-left-4 duration-500 delay-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {isInstructor ? 'Your Courses' : 'Continue Learning'}
                </h2>
                <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => handleCourseClick(course.id)}
                    className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                        {course.title}
                      </h3>
                      <Play className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-200" />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </span>
                      {course.students && (
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} students</span>
                        </span>
                      )}
                    </div>

                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          {isInstructor ? 'Course Progress' : `Next: ${course.nextLesson}`}
                        </span>
                        <span className="font-medium text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-in slide-in-from-left-4 duration-500 delay-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { 
                    action: isInstructor ? 'New student enrolled' : 'Completed lesson',
                    course: 'Web Development Bootcamp',
                    time: '2 hours ago',
                    type: 'success'
                  },
                  { 
                    action: isInstructor ? 'Course updated' : 'Started new module',
                    course: 'Python & Data Science',
                    time: '1 day ago',
                    type: 'info'
                  },
                  { 
                    action: isInstructor ? 'Student submitted assignment' : 'Earned certificate',
                    course: 'Digital Marketing',
                    time: '3 days ago',
                    type: 'achievement'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 py-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'achievement' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.course}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-in slide-in-from-right-4 duration-500 delay-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {isInstructor ? 'Upcoming Sessions' : 'Your Schedule'}
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'React Advanced Patterns', time: 'Today, 2:00 PM', type: 'live' },
                  { title: 'Python Workshop Q&A', time: 'Tomorrow, 10:00 AM', type: 'upcoming' },
                  { title: 'Marketing Strategy Review', time: 'Thu, 3:00 PM', type: 'upcoming' }
                ].map((session, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors duration-200">
                    <Calendar className={`w-5 h-5 ${session.type === 'live' ? 'text-red-500' : 'text-purple-600'}`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{session.title}</p>
                      <p className="text-xs text-gray-600">{session.time}</p>
                    </div>
                    {session.type === 'live' && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-in slide-in-from-right-4 duration-500 delay-300">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {(isInstructor ? [
                  { label: 'Create New Course', icon: BookOpen },
                  { label: 'Schedule Live Session', icon: Calendar },
                  { label: 'View Analytics', icon: TrendingUp },
                  { label: 'Manage Students', icon: Users }
                ] : [
                  { label: 'Browse Courses', icon: BookOpen },
                  { label: 'Join Live Session', icon: Play },
                  { label: 'View Progress', icon: TrendingUp },
                  { label: 'Download Resources', icon: Award }
                ]).map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 group"
                  >
                    <action.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{action.label}</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;