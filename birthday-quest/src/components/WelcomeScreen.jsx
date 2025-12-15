import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ setCurrentScreen, particles }) => {
  const [showText, setShowText] = useState(false);
  useEffect(() => { setTimeout(() => setShowText(true), 1000); }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.alphacoders.com/113/1130695.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-blue-900/50"></div>
      </div>
      {particles.map(p => (
        <div key={p.id} className="absolute w-1 h-1 bg-white rounded-full opacity-60" style={{ left: `${p.left}%`, top: '-20px', animation: `float ${p.duration}s linear infinite`, animationDelay: `${p.delay}s` }} />
      ))}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <div className={`space-y-6 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 mb-6 drop-shadow-lg">НАСТЯ</h1>
          <div className="space-y-4 text-white text-lg sm:text-2xl font-light leading-relaxed drop-shadow-md">
            <p>Зірки шепотіли про цей день...</p>
            <p>Твій особистий світ Тейвату чекає.</p>
          </div>
          <button onClick={() => setCurrentScreen('intro')} className="mt-12 group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-xl py-4 px-12 rounded-full transition-all transform group-hover:scale-105 shadow-2xl border border-white/30">РОЗПОЧАТИ ПРИГОДУ</div>
          </button>
        </div>
      </div>
      <style>{`@keyframes float { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.8; } 100% { transform: translateY(100vh); opacity: 0; } }`}</style>
    </div>
  );
};
export default WelcomeScreen;