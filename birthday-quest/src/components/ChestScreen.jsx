import React from 'react';
import { Box, Lock } from 'lucide-react';

const ChestScreen = ({ setCurrentScreen, chestsOpened, openChest }) => {
  const chests = [
    { id: 1, name: "Скриня Дружби", content: "Дякую за твою підтримку! Ти найкраща! 👯‍♀️", color: "from-pink-500 to-rose-500" },
    { id: 2, name: "Скриня Радості", content: "Нехай кожен твій день буде як свято! 🎉", color: "from-orange-400 to-red-500" },
    { id: 3, name: "Скриня Успіху", content: "Бажаю досягти всіх вершин, як Мандрівник! 🏔️", color: "from-blue-400 to-indigo-500" },
    { id: 4, name: "Таємна Скриня", content: "Секрет на карті тепер відкрито! Шукай квітку! 🌸", color: "from-purple-500 to-violet-500", special: true }
  ];

  return (
    <div className="min-h-screen bg-amber-950 p-4 relative overflow-y-auto">
      <div className="absolute inset-0 bg-[url('https://wallpapercave.com/uwp/uwp3966786.jpeg')] bg-cover bg-center opacity-30 fixed" />
      <button onClick={() => setCurrentScreen('map')} className="relative z-20 mb-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-md">← Назад</button>
      <div className="relative z-10 max-w-lg mx-auto pb-10">
        <h1 className="text-3xl font-bold text-amber-200 text-center mb-6">Скарбниця</h1>
        <div className="grid gap-4">
          {chests.map(chest => {
            const isOpened = chestsOpened.includes(chest.id);
            return (
              <div key={chest.id} onClick={() => !isOpened && openChest(chest.id, chest.special)} className={`relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300 ${isOpened ? 'border-gray-600 bg-black/40' : `border-amber-400/50 bg-gradient-to-r ${chest.color} cursor-pointer hover:scale-105 shadow-lg`}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-white/20`}>{isOpened ? <Box className="w-8 h-8 text-gray-300" /> : <Lock className="w-8 h-8 text-white" />}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{chest.name}</h3>
                    {isOpened ? <p className="text-amber-100 animate-fadeIn">{chest.content}</p> : <p className="text-white/80 text-sm">Натисни, щоб відкрити</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ChestScreen;