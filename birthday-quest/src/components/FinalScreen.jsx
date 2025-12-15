import React from 'react';
import { Crown, Star, Heart } from 'lucide-react';

const FinalScreen = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
       <div className="absolute inset-0 bg-[url('https://images.alphacoders.com/110/1108235.jpg')] bg-cover bg-center" />
       <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
       <div className="relative z-10 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl animate-fadeIn max-w-lg">
          <Crown className="w-20 h-20 text-yellow-300 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 mb-6">З Днем Народження!</h1>
          <p className="text-white text-lg sm:text-xl leading-relaxed mb-8">
            Ти пройшла всі випробування Тейвату, зібрала всі спогади і відкрила всі скарби.
            Але головний скарб цього світу - це <span className="text-yellow-300 font-bold">ТИ</span>!
            <br/><br/>
            Залишайся такою ж яскравою, сміливою та прекрасною. 
            Твоя пригода тільки починається! 🌎✨
          </p>
          <div className="flex justify-center gap-4">
             <Star className="text-yellow-400 w-8 h-8 animate-spin-slow" />
             <Heart className="text-pink-500 w-8 h-8 animate-pulse" />
             <Star className="text-yellow-400 w-8 h-8 animate-spin-slow" />
          </div>
       </div>
    </div>
  );
};
export default FinalScreen;