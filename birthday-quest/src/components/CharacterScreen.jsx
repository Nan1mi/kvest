import React, { useEffect } from 'react';

const CharacterScreen = ({ setCurrentScreen, templeAnswers, setCharacterResult, characterResult }) => {
  useEffect(() => {
    // ЛОГІКА: Рахуємо, кого обирали найчастіше
    if (!characterResult && templeAnswers.length > 0) {
        const counts = {};
        templeAnswers.forEach(char => { counts[char] = (counts[char] || 0) + 1; });
        let maxCount = 0;
        let winner = templeAnswers[0];
        Object.entries(counts).forEach(([char, count]) => { if (count > maxCount) { maxCount = count; winner = char; } });
        setCharacterResult(winner);
    }
  }, [templeAnswers, characterResult, setCharacterResult]);

  // СПИСОК ПЕРСОНАЖІВ З ФОТО 
  const charactersDB = {
    'Hu Tao': { desc: "Ти весела, енергійна і маєш унікальне почуття гумору!", img: "https://images.alphacoders.com/113/1138547.png", element: "Pyro 🔥" },
    'Ayaka': { desc: "Ти витончена, добра і завжди тримаєш своє слово.", img: "https://images.alphacoders.com/116/1169085.jpg", element: "Cryo ❄️" },
    'Raiden': { desc: "Ти сильна особистість, яка знає, чого хоче.", img: "https://images.alphacoders.com/116/1165681.jpg", element: "Electro ⚡" },
    'Nahida': { desc: "Ти дуже мудра і турботлива. Ти бачиш світ глибше.", img: "https://images.alphacoders.com/128/1284000.png", element: "Dendro 🌿" },
    'Yae Miko': { desc: "Ти хитра, розумна і неймовірно чарівна.", img: "https://images.alphacoders.com/120/1205680.jpg", element: "Electro ⚡" },
    'Kazuha': { desc: "Ти спокійна, поетична душа, яка цінує свободу.", img: "https://images.alphacoders.com/115/1154786.jpg", element: "Anemo 🌪️" },
    'Zhongli': { desc: "Ти надійна, як скеля. Друзі завжди можуть на тебе покластися.", img: "https://images.alphacoders.com/114/1148858.jpg", element: "Geo 🔶" },
    'Yelan': { desc: "Ти загадкова і завжди на крок попереду.", img: "https://images.alphacoders.com/123/1233075.jpg", element: "Hydro 💧" },
    'default': { desc: "Ти - Мандрівниця! Ти змінюєш світ навколо себе.", img: "https://images.alphacoders.com/110/1109232.jpg", element: "Star 🌟" }
  };

  const result = charactersDB[characterResult] || charactersDB['default'];
  const name = characterResult || "Мандрівниця";

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative">
       {/* ФОТО НА ФОНІ */}
       <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-md scale-110" style={{ backgroundImage: `url('${result.img}')` }} />
       
       <div className="relative z-10 w-full max-w-md bg-slate-900/90 rounded-3xl overflow-hidden border border-yellow-500/50 shadow-2xl animate-fadeIn">
          <div className="h-72 w-full bg-cover bg-top" style={{ backgroundImage: `url('${result.img}')` }}>
             <div className="w-full h-full bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          <div className="p-6 text-center -mt-12 relative">
             <div className="inline-block bg-black/80 text-yellow-400 px-4 py-1 rounded-full text-sm font-bold mb-2 border border-yellow-500/30">{result.element}</div>
             <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{name}</h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">{result.desc}</p>
             <button onClick={() => setCurrentScreen('map')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-xl w-full shadow-lg hover:scale-105 transition-transform">Круто!</button>
          </div>
       </div>
    </div>
  );
};
export default CharacterScreen;