
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Languages, Camera, Clock, Star } from 'lucide-react';

const BottomNavbar = () => {
  const location = useLocation();
  
  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  // Active tab styles
  const getTabStyle = (path: string) => {
    return isActive(path) 
      ? "flex flex-col items-center relative after:content-[''] after:absolute after:top-[-8px] after:w-full after:h-[8px] after:bg-gradient-to-t after:from-gray-200 after:to-transparent" 
      : "flex flex-col items-center";
  };

  // Active icon color
  const getIconColor = (path: string) => {
    return isActive(path) ? "#1a73e8" : "#6b7280";
  };
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex justify-around items-center px-4">
      <Link to="/home" className={getTabStyle('/home')}>
        <BookOpen size={24} className={`text-[${getIconColor('/home')}]`} />
      </Link>
      <Link to="/translate" className={getTabStyle('/translate')}>
        <Languages size={24} className={`text-[${getIconColor('/translate')}]`} />
      </Link>
      <Link to="/camera" className={getTabStyle('/camera')}>
        <div className="bg-blue-900 rounded-full p-3 -mt-6">
          <Camera size={24} className="text-white" />
        </div>
      </Link>
      <Link to="/history" className={getTabStyle('/history')}>
        <Clock size={24} className={`text-[${getIconColor('/history')}]`} />
      </Link>
      <Link to="/favorites" className={getTabStyle('/favorites')}>
        <Star size={24} className={`text-[${getIconColor('/favorites')}]`} />
      </Link>
    </div>
  );
};

export default BottomNavbar;
