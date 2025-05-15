import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Award } from 'lucide-react';

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    fullName: '',
    university: '',
    major: '',
    interest: '',
    organizationName: '',
    username: '',
    password: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignUp = () => {
    console.log(`Signing up as ${activeTab}:`, formData);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <img src="/login.svg" alt="Register" className="w-full max-w-lg h-auto" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <Tabs defaultValue="student" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-full h-16 px-2 bg-white border border-ungu-tua">
              <TabsTrigger
                value="student"
                className="rounded-full flex items-center gap-2 text-gray-700 data-[state=active]:bg-ungu-tua data-[state=active]:text-white transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger
                value="organizer"
                className="rounded-full flex items-center gap-2 text-gray-700 data-[state=active]:bg-ungu-tua data-[state=active]:text-white transition-all duration-200"
              >
                <Award className="h-4 w-4" />
                <span>Organizer</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ungu-tua">Regist Your Account</h2>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {activeTab === 'student' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full h-11 rounded-lg border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    University
                  </label>
                  <Input
                    type="text"
                    placeholder="Your University"
                    value={formData.university}
                    onChange={(e) => handleChange('university', e.target.value)}
                    className="w-full h-11 rounded-lg border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Major
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Major"
                    value={formData.major}
                    onChange={(e) => handleChange('major', e.target.value)}
                    className="w-full h-11 rounded-lg border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </label>
                  <Select value={formData.interest} onValueChange={(value) => handleChange('interest', value)}>
                    <SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
                      <SelectValue placeholder="Select One" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Organization Name"
                    value={formData.organizationName}
                    onChange={(e) => handleChange('organizationName', e.target.value)}
                    className="w-full h-11 rounded-lg border-gray-300"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <Input
                type="text"
                placeholder="Your Username"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                className="w-full h-11 rounded-lg border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="w-full h-11 rounded-lg border-gray-300"
              />
            </div>

            <Button
              onClick={handleSignUp}
              className="w-full h-11 bg-ungu-tua hover:bg-purple-700 text-white font-medium rounded-lg transition duration-200"
            >
              Sign Up
            </Button>

            <p className="text-center text-gray-600">
              Have an account?{' '}
              <a href="#" className="text-ungu-tua hover:underline font-medium">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}