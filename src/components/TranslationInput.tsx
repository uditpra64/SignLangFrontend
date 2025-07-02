
import React, { useState } from 'react';
import { Mic, X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TranslationInputProps {
  onTranslate: (text: string) => void;
}

const TranslationInput = ({ onTranslate }: TranslationInputProps) => {
  const [inputText, setInputText] = useState('');

  const handleTranslate = () => {
    if (inputText.trim()) {
      onTranslate(inputText);
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  return (
    <div className="bg-app-light-purple rounded-xl p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="font-semibold text-blue-900">English</span>
          <Volume2 size={18} className="ml-2 text-blue-900" />
        </div>
        {inputText && (
          <button onClick={clearInput}>
            <X size={18} className="text-gray-500" />
          </button>
        )}
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here..."
        className="w-full bg-transparent outline-none resize-none h-20"
        style={{ minHeight: '3rem' }}
      />
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-blue-900 text-white h-12 w-12"
        >
          <Mic className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleTranslate}
          className="bg-app-orange hover:bg-orange-600 text-white rounded-full px-6"
        >
          Translate
        </Button>
      </div>
    </div>
  );
};

export default TranslationInput;
