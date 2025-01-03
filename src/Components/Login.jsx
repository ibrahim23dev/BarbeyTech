import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaFacebook, FaTwitter } from "react-icons/fa"; // Facebook & Twitter Icons

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 lg:px-16 py-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-6">Log in <span className="text-yellow-300">Sign up</span></h1>
          <p className="text-lg mb-10">
            Use this platform to access or create your account for free.
          </p>
          <div className="flex space-x-4">
            <button className="py-2 px-6 text-blue-500 bg-white rounded-lg shadow-md hover:bg-gray-100">
              Log in
            </button>
            <button className="py-2 px-6 text-white bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500">
              Sign up
            </button>
          </div>
          <p className="text-sm mt-4 text-white/80">
            Copy and use this design in your project easily.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 lg:p-16 bg-gray-50">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Log In
            </h2>
            {/* Social Login Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md">
                <FcGoogle className="w-6 h-6 mr-3" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md">
                <FaFacebook className="w-6 h-6 text-blue-600 mr-3" />
                Continue with Facebook
              </button>
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md">
                <FaTwitter className="w-6 h-6 text-blue-400 mr-3" />
                Continue with Twitter
              </button>
            </div>
            <div className="my-6 flex items-center">
              <span className="w-full h-px bg-gray-300"></span>
              <span className="text-gray-400 mx-3">OR</span>
              <span className="w-full h-px bg-gray-300"></span>
            </div>
            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Log In
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Signup Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
