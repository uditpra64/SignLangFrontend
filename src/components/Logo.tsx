
import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 mb-6 relative">
        <div className="absolute w-28 h-28 bg-blue-400 rounded-full top-0 left-0"></div>
        <div className="absolute w-28 h-28 bg-orange-300 rounded-full top-0 right-0"></div>
        <div className="absolute w-28 h-28 bg-gray-300 rounded-full bottom-0 left-8"></div>
      </div>
      <h1 className="text-2xl font-bold">LOGO</h1>
      <h2 className="text-lg font-semibold mt-3">SIGN LANGUAGE TRANSLATION</h2>
    </div>
  );
};

export default Logo;
