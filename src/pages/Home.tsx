
import React, { useState } from 'react';
import { Menu, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PhoneStatusBar from '@/components/PhoneStatusBar';
import LanguageSelector from '@/components/LanguageSelector';
import TranslationInput from '@/components/TranslationInput';
import TranslationResult from '@/components/TranslationResult';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Home = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleTranslate = (text: string) => {
    setTranslatedText(text);
    setShowVideo(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Logout Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      navigate('/');
    } catch (error) {
      toast({
        title: "Unexpected Error",
        description: "An error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PhoneStatusBar />
      
      <header className="p-4 flex items-center justify-between">
        <button className="p-1" onClick={handleBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Sign language translation</h1>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleLogout}
          className="text-destructive hover:bg-destructive/10"
        >
          Logout
        </Button>
      </header>
      
      <main className="flex-1 px-4 pb-20">
        <LanguageSelector sourceLanguage="English" targetLanguage="Sign Language" />
        
        <TranslationInput onTranslate={handleTranslate} />
        
        <TranslationResult translatedText={translatedText} showVideo={showVideo} />
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default Home;
