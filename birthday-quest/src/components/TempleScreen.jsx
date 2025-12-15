import React, { useState } from 'react';
import { Swords, Check } from 'lucide-react';

const TempleScreen = ({ setCurrentScreen, templeAnswers, addTempleAnswer }) => {
  const [currentQuest, setCurrentQuest] = useState(0);
  const [selectedChar, setSelectedChar] = useState(null);

  // 7 Питань
  const quests = [
    { title: "Що для тебе найважливіше?", options: [{ text: "Свобода та вітер 🍃", char: "Kazuha" }, { text: "Порядок та контракти 🔶", char: "Zhongli" }, { text: "Вічність та сила ⚡", char: "Raiden" }, { text: "Мудрість та сни 🍀", char: "Nahida" }] },
    { title: "Твоя ідеальна відпустка?", options: [{ text: "Читання книг у тиші 📚", char: "Kokomi" }, { text: "Фестиваль феєрверків! 🎆", char: "Hu Tao" }, { text: "Тренування з мечем ⚔️", char: "Raiden" }, { text: "Кулінарний тур 🍲", char: "Xiangling" }] },
    { title: "Як ти вирішуєш проблеми?", options: [{ text: "Йду напролом! 🔥", char: "Hu Tao" }, { text: "Аналізую та планую 💧", char: "Ayato" }, { text: "Спокійно та виважено ❄️", char: "Ayaka" }, { text: "Імпровізую по ходу 🌪️", char: "Kazuha" }] },
    { title: "Обери супутника:", options: [{ text: "Веселий привид 👻", char: "Hu Tao" }, { text: "Мудра лисиця 🦊", char: "Yae Miko" }, { text: "Маленька фея 🧚‍♀️", char: "Nahida" }, { text: "Літаючий компаньйон ✨", char: "Zhongli" }] },
    { title: "Твій улюблений стиль бою?", options: [{ text: "Магія та каталізатори ✨", char: "Yae Miko" }, { text: "Швидкі удари луком 🏹", char: "Yelan" }, { text: "Потужні удари списом 🔱", char: "Xiao" }, { text: "Елегантний меч 🗡️", char: "Ayaka" }] },
    { title: "Що тебе надихає?", options: [{ text: "Природа та ліс 🌿", char: "Tighnari" }, { text: "Гроші та багатство 💰", char: "Ningguang" }, { text: "Мистецтво та танці 💃", char: "Nilou" }, { text: "Справедливість ⚖️", char: "Neuvillette" }] },
    { title: "Твоя стихія?", options: [{ text: "Кріо (Лід) ❄️", char: "Ayaka" }, { text: "Піро (Вогонь) 🔥", char: "Hu Tao" }, { text: "Електро (Блискавка) ⚡", char: "Raiden" }, { text: "Анемо (Вітер) 🌪️", char: "Kazuha" }] }
  ];
  
  const currentQ = quests[currentQuest];
  const isFinished = templeAnswers.length >= 7;

  const handleSelect = (char) => {
    setSelectedChar(char);
    setTimeout(() => {
        addTempleAnswer(char);
        if (currentQuest < quests.length - 1) {
            setCurrentQuest(prev => prev + 1);
            setSelectedChar(null);
        }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://wallpapercave.com/uwp/uwp4109628.jpeg')] bg-cover bg-center opacity-30" />
      <button onClick={() => setCurrentScreen('map')} className="absolute top-4 left-4 z-50 bg-purple-900/80 text-white px-4 py-2 rounded-lg border border-purple-400">← Назад</button>
      
      <div className="relative z-10 w-full max-w-md mt-10">
        <div className="text-center mb-6">
           <Swords className="w-16 h-16 text-purple-400 mx-auto mb-2" />
           <h2 className="text-2xl font-bold text-white">Храм Долі</h2>
           <p className="text-purple-200">Питання {Math.min(currentQuest + 1, 7)} з 7</p>
        </div>

        {!isFinished ? (
          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6 text-center leading-tight">{currentQ.title}</h3>
            {/* Виправлення кліку (z-20) */}
            <div className="space-y-3 relative z-20">
              {currentQ.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(opt.char)} className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 active:scale-95 cursor-pointer ${selectedChar === opt.char ? 'bg-purple-600 border-purple-400 scale-105' : 'bg-slate-700/50 border-slate-600 hover:bg-slate-700 hover:border-purple-400'}`}>
                  <span className="text-white font-medium">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-green-900/80 backdrop-blur-md rounded-2xl p-8 text-center border border-green-500 animate-fadeIn">
            <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Випробування завершено!</h3>
            <p className="text-green-100 mb-6">Зірки визначили твою долю...</p>
            <button onClick={() => setCurrentScreen('map')} className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-xl w-full">Повернутися до карти</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TempleScreen;