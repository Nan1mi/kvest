import React, { useState } from 'react';
import { Gem, Trophy, Star } from 'lucide-react';

const CrystalScreen = ({ setCurrentScreen, particles, crystalsFound, collectCrystal }) => {
  const [showReward, setShowReward] = useState(false);

  // Тексти та налаштування з вашого файлу
  const crystals = [
    { id: 1, text: "Ти завжди знаходиш світло навіть у найтемніші дні! ☀️", x: '15%', y: '60%', fake: false },
    { id: 2, text: "Твоя посмішка може зцілити будь-який сумний день! 😊", x: '35%', y: '40%', fake: false },
    { id: 3, text: "Ти надихаєш інших бути кращими! 🌟", x: '60%', y: '55%', fake: false },
    { id: 4, text: "Твоя доброта - справжнє чудо! 💝", x: '80%', y: '35%', fake: false },
    { id: 5, text: "З тобою будь-яка пригода стає магічною! ✨", x: '25%', y: '25%', fake: false },
    { id: 6, text: "Ти робиш світ кращим просто тим, що існуєш! 🌈", x: '70%', y: '70%', fake: false },
    { id: 7, text: "Твоя сила духу вражає! 💪", x: '45%', y: '80%', fake: false },
    // "Зайвий" кристал
    { id: 8, text: "Це підробка! Але ти молодець, що перевірила! 😄", x: '50%', y: '15%', fake: true }
  ];

  // Рахуємо тільки справжні кристали (id <= 7)
  const realCrystalsCount = crystalsFound.filter(id => id <= 7).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-blue-900 to-indigo-900 relative overflow-hidden p-4">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            animation: `float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto max-w-6xl py-8">
        <div className="text-center mb-8">
          <button
            onClick={() => setCurrentScreen('map')}
            className="mb-4 bg-purple-600/50 hover:bg-purple-600/70 text-white px-6 py-2 rounded-lg transition-all"
          >
            ← Назад на карту
          </button>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 mb-4">
            💎 Долина Кристалів
          </h1>
          <div className="bg-cyan-900/60 backdrop-blur-lg rounded-xl p-4 inline-block border border-cyan-400/30">
            <p className="text-cyan-100">
              Зібрано: <span className="text-yellow-300 font-bold">{realCrystalsCount}/7</span>
            </p>
          </div>
        </div>

        <div className="relative aspect-video bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-3xl border-2 border-cyan-400/30 overflow-hidden shadow-2xl">
          {crystals.map(crystal => {
            const isFound = crystalsFound.includes(crystal.id);
            return (
              <button
                key={crystal.id}
                onClick={() => {
                  // Збираємо кристал (навіть якщо фальшивий - щоб показати повідомлення, але не рахувати в прогрес)
                  if (!isFound) {
                    collectCrystal(crystal.id);
                    setShowReward(crystal.id);
                  }
                }}
                disabled={isFound}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                  !isFound ? 'hover:scale-125 animate-pulse cursor-pointer' : 'opacity-30 cursor-default'
                }`}
                style={{ left: crystal.x, top: crystal.y }}
              >
                <Gem className={`w-12 h-12 ${crystal.fake ? 'text-gray-400' : 'text-cyan-300'} ${!isFound && 'drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]'}`} />
              </button>
            );
          })}
        </div>

        {/* Модальне вікно (Нагорода) */}
        {showReward && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-gradient-to-br from-cyan-600/90 to-blue-600/90 backdrop-blur-lg rounded-2xl p-8 max-w-md border-2 border-cyan-300 shadow-2xl">
              <div className="text-center space-y-4">
                <Trophy className="w-16 h-16 text-yellow-300 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">
                  {crystals.find(c => c.id === showReward)?.fake ? "Упс! Це не кристал" : "Кристал знайдено!"}
                </h3>
                <p className="text-xl text-cyan-100">{crystals.find(c => c.id === showReward)?.text}</p>
                <button
                  onClick={() => setShowReward(false)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-3 px-8 rounded-xl transition-all"
                >
                  Продовжити
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Повідомлення про завершення (показується тільки коли зібрано 7 справжніх) */}
        {realCrystalsCount === 7 && (
          <div className="mt-8 text-center bg-yellow-500/20 backdrop-blur-lg rounded-xl p-6 border-2 border-yellow-400 animate-fadeIn">
            <Star className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <p className="text-yellow-100 text-lg font-bold">
              🎉 Всі кристали зібрані! Нові локації відкриті на карті!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrystalScreen;