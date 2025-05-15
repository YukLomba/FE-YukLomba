import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Award } from 'lucide-react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in as ${activeTab}:`, { username, password });
  };

  return (
    <div className="min-h-screen flex">
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <img src="/login.svg" alt="Login" className="w-full max-w-lg h-auto" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 ">
        <div className="w-full max-w-md space-y-8">
          <Tabs defaultValue="student" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-full h-16 px-2 border border-ungu-tua bg-white">
              <TabsTrigger
                value="student"
                className="rounded-full flex items-center gap-2 text-gray-700 data-[state=active]:bg-ungu-tua data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger
                value="organizer"
                className="rounded-full flex items-center gap-2 text-gray-700 data-[state=active]:bg-ungu-tua data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Award className="h-4 w-4" />
                <span>Organizer</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Welcome Text */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ungu-tua">Welcome Back</h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Masukkan Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-3 px-4 bg-ungu-tua hover:bg-purple-700 text-white font-medium rounded-lg transition duration-200"
            >
              Log In
            </button>

            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-ungu-tua hover:underline font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}