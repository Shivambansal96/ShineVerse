import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Users, Star, BookOpen, CheckCircle, Lock, Download, MessageCircle } from 'lucide-react';

interface CourseDetailProps {
  courseId: string;
  onBack: () => void;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  videoUrl: string;
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: string;
  image: string;
  lessons: Lesson[];
}

const courseData: Record<string, CourseData> = {
  '1': {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world projects and launch your career in tech.',
    instructor: 'Sarah Johnson',
    duration: '12 weeks',
    students: 1250,
    rating: 4.9,
    price: '$199',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '1', title: 'Introduction to Web Development', duration: '15:30', isCompleted: true, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: '2', title: 'HTML Fundamentals', duration: '22:45', isCompleted: true, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: '3', title: 'CSS Styling and Layouts', duration: '28:15', isCompleted: false, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
      { id: '4', title: 'JavaScript Basics', duration: '35:20', isCompleted: false, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
      { id: '5', title: 'React Introduction', duration: '42:10', isCompleted: false, isLocked: true, videoUrl: '' },
      { id: '6', title: 'Building Your First App', duration: '38:45', isCompleted: false, isLocked: true, videoUrl: '' }
    ]
  },
  '2': {
    id: '2',
    title: 'Advanced Python & Data Science',
    description: 'Deep dive into Python programming, machine learning, and data analysis with real industry projects.',
    instructor: 'Dr. Michael Chen',
    duration: '10 weeks',
    students: 890,
    rating: 4.8,
    price: '$249',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '1', title: 'Python Advanced Concepts', duration: '25:30', isCompleted: true, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: '2', title: 'Data Structures & Algorithms', duration: '32:15', isCompleted: false, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: '3', title: 'Machine Learning Basics', duration: '45:20', isCompleted: false, isLocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
    ]
  }
};

const CourseDetail = ({ courseId, onBack }: CourseDetailProps) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleLessonClick = (lesson: Lesson) => {
    if (!lesson.isLocked) {
      setCurrentLesson(lesson);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Courses</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player & Course Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-in slide-in-from-left-4 duration-500">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative">
                {currentLesson ? (
                  <video
                    key={currentLesson.id}
                    controls
                    className="w-full h-full"
                    poster={course.image}
                  >
                    <source src={currentLesson.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Select a lesson to start learning</h3>
                      <p className="text-lg opacity-90">Choose from the curriculum on the right</p>
                    </div>
                  </div>
                )}
              </div>
              
              {currentLesson && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentLesson.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentLesson.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-left-4 duration-500 delay-100">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                    </span>
                    <span>by {course.instructor}</span>
                    <span className="px-2 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download Resources</span>
                </button>
                <button className="px-6 py-3 border-2 border-purple-200 text-purple-600 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Discussion</span>
                </button>
              </div>
            </div>
          </div>

          {/* Curriculum Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <span>Course Curriculum</span>
              </h3>
              
              <div className="space-y-3">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    onClick={() => handleLessonClick(lesson)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
                      currentLesson?.id === lesson.id
                        ? 'border-purple-300 bg-gradient-to-r from-pink-50 to-purple-50'
                        : lesson.isLocked
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        lesson.isCompleted
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                          : lesson.isLocked
                          ? 'bg-gray-300 text-gray-500'
                          : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
                      }`}>
                        {lesson.isCompleted ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : lesson.isLocked ? (
                          <Lock className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          lesson.isLocked ? 'text-gray-500' : 'text-gray-900 group-hover:text-purple-600'
                        } transition-colors duration-200`}>
                          {lesson.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{lesson.duration}</span>
                          {lesson.isCompleted && (
                            <span className="text-green-600 font-medium">Completed</span>
                          )}
                        </div>
                      </div>

                      {!lesson.isLocked && (
                        <Play className={`w-5 h-5 ${
                          currentLesson?.id === lesson.id ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-600'
                        } transition-colors duration-200`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-700 font-medium">Progress</span>
                  <span className="text-purple-700 font-bold">
                    {Math.round((course.lessons.filter(l => l.isCompleted).length / course.lessons.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(course.lessons.filter(l => l.isCompleted).length / course.lessons.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Course Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-right-4 duration-500 delay-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-semibold text-gray-900">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;