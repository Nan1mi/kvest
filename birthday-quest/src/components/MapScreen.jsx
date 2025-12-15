import React from 'react';
import { Gem, Box, Swords, Flower2, User, Lock, Gift, Map as MapIcon } from 'lucide-react';

const MapScreen = ({ setCurrentScreen, crystalsFound, chestsOpened, templeAnswers, secretUnlocked, characterResult }) => {
  const realCrystals = crystalsFound.filter(id => id <= 6).length;
  
  const locations = [
    { id: 'crystal', name: 'Долина Кристалів', icon: Gem, x: '20%', y: '45%', unlocked: true, progress: `${realCrystals}/6`, color: 'from-cyan-400 to-blue-500', completed: realCrystals === 6 },
    { id: 'chest', name: 'Руїни Скринь', icon: Box, x: '75%', y: '25%', unlocked: realCrystals === 6, progress: `${chestsOpened.length}/4`, color: 'from-yellow-400 to-orange-500', completed: chestsOpened.length === 4 },
    { id: 'temple', name: 'Храм', icon: Swords, x: '70%', y: '65%', unlocked: chestsOpened.length === 4, progress: `${templeAnswers.length}/7`, color: 'from-red-500 to-pink-600', completed: templeAnswers.length === 7 },
    { id: 'secret', name: 'Секрет', icon: Flower2, x: '25%', y: '15%', unlocked: secretUnlocked, progress: secretUnlocked ? '✓' : '?', color: 'from-green-400 to-emerald-600', completed: secretUnlocked },
    { id: 'character', name: 'Твій Герой', icon: User, x: '50%', y: '80%', unlocked: templeAnswers.length === 7, progress: characterResult ? '✓' : '?', color: 'from-purple-500 to-violet-600', completed: !!characterResult }
  ];
  const canFinish = locations.every(loc => loc.completed);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Фон: Світ Геншина */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm" style={{ backgroundImage: `url('https://images.alphacoders.com/116/1166164.jpg')` }} />
      
      {/* ОБМЕЖЕННЯ ШИРИНИ ДЛЯ ТЕЛЕФОНУ (max-w-[340px]) */}
      <div className="relative z-10 w-full max-w-[340px]">
        <div className="text-center mb-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2"><MapIcon className="w-6 h-6" /> Карта Тейвату</h1>
          <p className="text-xs text-gray-300">Натискай на локації</p>
        </div>
        
        {/* Карта */}
        <div className="relative w-full aspect-square bg-blue-900/40 rounded-3xl border-2 border-yellow-500/30 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* ФОТО КАРТИ ГЕНШИНА (замінив на краще посилання) */}
          <div className="absolute inset-0 opacity-60 bg-[url('https://static.wikia.nocookie.net/gensin-impact/images/4/44/Map_Teyvat.png')] bg-cover bg-center mix-blend-overlay scale-125"></div>
          
          {locations.map(loc => (
            <button key={loc.id} onClick={() => loc.unlocked && setCurrentScreen(loc.id)} disabled={!loc.unlocked} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all group ${loc.unlocked ? 'cursor-pointer' : 'cursor-not-allowed grayscale opacity-60'}`} style={{ left: loc.x, top: loc.y }}>
              <div className="relative flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-gradient-to-br ${loc.color} ${loc.unlocked ? 'animate-pulse group-hover:scale-110' : ''} transition-transform`}>
                  {loc.unlocked ? <loc.icon className="w-6 h-6 text-white" /> : <Lock className="w-5 h-5 text-gray-200" />}
                </div>
                <div className="mt-1 bg-black/80 px-2 py-0.5 rounded text-[10px] text-white font-bold whitespace-nowrap border border-white/20">{loc.name} <span className="text-yellow-400 ml-1">{loc.progress}</span></div>
              </div>
            </button>
          ))}
          
          {canFinish && (
            <button onClick={() => setCurrentScreen('final')} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-yellow-200 shadow-[0_0_30px_rgba(251,146,60,0.6)]"><Gift className="w-8 h-8 text-white" /></div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MapScreen;