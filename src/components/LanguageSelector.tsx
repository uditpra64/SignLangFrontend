
import React from 'react';

interface LanguageSelectorProps {
  sourceLanguage: string;
  targetLanguage: string;
}

const LanguageSelector = ({ sourceLanguage, targetLanguage }: LanguageSelectorProps) => {
  return (
    <div className="bg-white rounded-full flex justify-between items-center p-2 px-4 mb-6 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/lovable-uploads/27fe87d8-9631-4de5-af39-41cb9cff6939.png" alt="US Flag" className="h-3" />
        </div>
        <span className="font-medium">{sourceLanguage}</span>
      </div>
      
      <div className="flex items-center justify-center w-6 h-6">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 14L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="font-medium">{targetLanguage}</div>
    </div>
  );
};

export default LanguageSelector;
