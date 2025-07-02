
import React from 'react';

const PhoneStatusBar = () => {
  return (
    <div className="h-10 px-5 flex items-center justify-between bg-white">
      <div className="text-black font-semibold text-sm">9:41</div>
      <div className="flex items-center space-x-1">
        <div className="w-4 h-3">
          <svg viewBox="0 0 20 15" fill="currentColor">
            <path d="M10 3C6.13 3 3 6.13 3 10H0l4 4 4-4H5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5c-1.38 0-2.63-.56-3.54-1.46l-1.41 1.41C6.68 16.54 8.25 17 10 17c3.87 0 7-3.13 7-7s-3.13-7-7-7z" />
          </svg>
        </div>
        <div className="w-4 h-3">
          <svg viewBox="0 0 20 15" fill="currentColor">
            <path d="M15.5 1h-11C3.67 1 3 1.67 3 2.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM15 14H5V3h10v11z" />
            <path d="M11.5 5h-6v1.5h6V5zM11.5 8h-6v1.5h6V8zM8.5 11h-3v1.5h3V11zM12.5 11v1.5h1V11h-1z" />
          </svg>
        </div>
        <div className="w-4 h-3 flex space-x-px">
          {[4, 5, 6, 7].map((i) => (
            <div key={i} className="flex-1 bg-black rounded-sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneStatusBar;
