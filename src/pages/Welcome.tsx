
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <div className="max-w-md w-full flex flex-col items-center">
        <Logo />
        
        <div className="w-full mt-16 space-y-8">
          <Link to="/signin">
            <Button className="w-full py-6 bg-app-purple hover:bg-purple-600 text-white rounded-full">
              Log in
            </Button>
          </Link>
          
          <div className="my-8"></div>
          
          <Link to="/signup">
            <Button className="w-full py-6 bg-app-purple hover:bg-purple-600 text-white rounded-full">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
