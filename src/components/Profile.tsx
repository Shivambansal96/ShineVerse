import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload, Github, Twitter, Linkedin, Globe, Calendar, Mail, User, MapPin, Phone, Save, Edit3, Award, BookOpen, Clock, Star } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface ProfileProps {
  onBack: () => void;
}

const Profile = ({ onBack }: ProfileProps) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    dateOfBirth: '',
    bio: '',
    github: '',
    twitter: '',
    linkedin: '',
    website: '',
    profileImage: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Saving profile data:', profileData);
  };

  const stats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'from-green-400 to-emerald-500' },
    { label: 'Hours Learned', value: '156', icon: Clock, color: 'from-blue-400 to-cyan-500' },
    { label: 'Certificates', value: '8', icon: Award, color: 'from-yellow-400 to-orange-500' },
    { label: 'Average Score', value: '94%', icon: Star, color: 'from-pink-400 to-rose-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-left-4 duration-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-pink-400 to-purple-500 group-hover:scale-105 transition-transform duration-300"
                  />
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg">
                      <Camera className="w-5 h-5" />
                    </button>
                  )}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-4">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 capitalize">{user?.role}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Social Profiles</h3>
                {[
                  { icon: Github, label: 'GitHub', value: profileData.github, name: 'github' },
                  { icon: Twitter, label: 'Twitter', value: profileData.twitter, name: 'twitter' },
                  { icon: Linkedin, label: 'LinkedIn', value: profileData.linkedin, name: 'linkedin' },
                  { icon: Globe, label: 'Website', value: profileData.website, name: 'website' }
                ].map((social, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200 group">
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors duration-200" />
                    {isEditing ? (
                      <input
                        type="text"
                        name={social.name}
                        value={social.value}
                        onChange={handleInputChange}
                        placeholder={`Your ${social.label} profile`}
                        className="flex-1 bg-transparent border-none outline-none text-sm"
                      />
                    ) : (
                      <span className="text-sm text-gray-700 flex-1">
                        {social.value || `Add ${social.label} profile`}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-right-4 duration-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <User className="w-6 h-6 text-pink-600" />
                <span>Personal Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{profileData.name}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{profileData.phone || 'Add phone number'}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                      placeholder="Your location"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{profileData.location || 'Add location'}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={profileData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{profileData.dateOfBirth || 'Add date of birth'}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-right-4 duration-500 delay-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 resize-none"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 min-h-[100px]">
                  {profileData.bio || 'Add a bio to tell others about yourself...'}
                </div>
              )}
            </div>

            {/* Resume Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-right-4 duration-500 delay-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resume</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300" />
                <p className="text-gray-600 mb-2">Upload your resume</p>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                  Choose File
                </button>
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end animate-in slide-in-from-bottom-4 duration-300">
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                >
                  <Save className="w-5 h-5" />
                  <span className="font-semibold">Save Changes</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3D Avatar Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-bottom-4 duration-500 delay-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Learning Avatar</h3>
          <div className="aspect-video bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
            {/* Placeholder for 3D Avatar - You can integrate Spline or other 3D libraries here */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold animate-pulse">
                {profileData.name.charAt(0)}
              </div>
              <p className="text-gray-600 mb-2">3D Avatar Coming Soon!</p>
              <p className="text-sm text-gray-500">Customize your learning experience with a personalized 3D avatar</p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce delay-500"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-indigo-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;