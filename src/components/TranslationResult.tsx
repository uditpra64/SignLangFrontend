
import React from 'react';
import { BookOpen, Share2, Star } from 'lucide-react';

interface TranslationResultProps {
  translatedText: string;
  showVideo: boolean;
}

const TranslationResult = ({ translatedText, showVideo }: TranslationResultProps) => {
  if (!translatedText && !showVideo) return null;
  
  return (
    <div className="bg-app-light-purple rounded-xl p-4">
      <h3 className="text-center text-gray-700 mb-4">
        {showVideo ? "Video of Sign Language Translation" : ""}
      </h3>
      
      {showVideo && (
        <div className="flex justify-end space-x-3 mt-4">
          <button className="text-blue-900">
            <BookOpen size={20} />
          </button>
          <button className="text-blue-900">
            <Share2 size={20} />
          </button>
          <button className="text-blue-900">
            <Star size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TranslationResult;
