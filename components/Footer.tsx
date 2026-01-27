import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              Creative India
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/70 mt-2 max-w-sm">
              A modern learning platform for students, magazines, videos, and school updates — built with love ❤
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 text-sm">
            <div className="space-y-2">
              <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-white/50">
                Explore
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Magazines</a></li>
                <li><a href="#" className="hover:underline">Search</a></li>
                <li><a href="#" className="hover:underline">Videos</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-white/50">
                Support
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-white/50">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-white/70">📧 support@school.com</li>
                <li className="text-gray-600 dark:text-white/70">📍 Your City, Your Country</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-white/50">
            © {new Date().getFullYear()} Creative India. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-gray-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label="Instagram"
            >
              <span className="text-lg">📸</span>
            </a>

            <a
              href="#"
              className="text-gray-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label="Facebook"
            >
              <span className="text-lg">📘</span>
            </a>

            <a
              href="#"
              className="text-gray-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label="YouTube"
            >
              <span className="text-lg">▶️</span>
            </a>

            <a
              href="#"
              className="text-gray-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label="Twitter"
            >
              <span className="text-lg">🐦</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
