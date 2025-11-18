import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Heart, Lock, FileText } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Lock, title: "Completely Anonymous", description: "No login required. Your identity is protected." },
    { icon: Shield, title: "Safe & Secure", description: "Your report is encrypted and stored securely." },
    { icon: Heart, title: "Support Available", description: "Access counseling, legal resources, and support networks." },
    { icon: FileText, title: "Your Voice Matters", description: "Every report helps create safer communities." },
  ];

  const quickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Quick Exit */}
      <button
        onClick={quickExit}
        className="fixed top-4 right-4 px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
      >
        Quick Exit
      </button>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>

          <h1 className="text-5xl font-bold">You Are Safe Here</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Report harassment or assault anonymously. No one will know who you are.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-600 font-semibold mb-2">Your voice matters. Your safety matters.</p>
            <p className="text-gray-700">Every report helps create awareness and builds evidence for action.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => navigate("/report")}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit a Report
            </button>
            <button
              onClick={() => navigate("/help")}
              className="px-8 py-4 bg-gray-300 text-gray-800 rounded-xl font-semibold hover:bg-gray-400 transition"
            >
              Get Help Now
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="bg-gray-200 p-6 rounded-2xl text-center">
          <p className="text-lg font-semibold mb-2">Need to leave quickly?</p>
          <p className="text-gray-700">
            Click the <span className="text-red-500 font-semibold">Quick Exit</span> button at the top right to go to Google.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
