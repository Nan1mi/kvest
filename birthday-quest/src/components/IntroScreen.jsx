import React from 'react';
import { Heart } from 'lucide-react';

const IntroScreen = ({ setCurrentScreen }) => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden p-4">
    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://wallpapercave.com/uwp/uwp2504162.jpeg')` }} />
    <div className="relative z-10 max-w-2xl text-center space-y-6 animate-fadeIn bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10">
      <Heart className="w-16 h-16 text-pink-400 mx-auto animate-bounce" />
      <h2 className="text-3xl font-bold text-white">Вітаю, Мандрівнице! ✨</h2>
      <div className="text-left space-y-4 text-slate-200">
        <p>Сьогодні особливий день, і Тейват приготував для тебе подарунки. Але щоб їх отримати, тобі треба відвідати всі локації на карті.</p>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h3 className="text-yellow-400 font-bold mb-2">Твої завдання:</h3>
          <ul className="space-y-2 text-sm">
             <li className="flex items-center gap-2">💎 Зібрати 6 кристалів спогадів</li>
             <li className="flex items-center gap-2">🎁 Відкрити 4 скрині зі скарбами</li>
             <li className="flex items-center gap-2">⚔️ Пройти тест і дізнатися свого героя</li>
             <li className="flex items-center gap-2">🌸 Знайти секретну локацію</li>
          </ul>
        </div>
      </div>
      <button onClick={() => setCurrentScreen('map')} className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-xl transition-all w-full shadow-lg">Відкрити Карту</button>
    </div>
  </div>
);
export default IntroScreen;