import React from 'react';
import { Flower2 } from 'lucide-react';

const SecretScreen = ({ setCurrentScreen }) => (
  <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-emerald-950">
    <div className="absolute inset-0 bg-[url('https://wallpapercave.com/uwp/uwp3579616.jpeg')] bg-cover bg-center opacity-50" />
    <div className="relative z-10 max-w-md bg-black/60 backdrop-blur-lg p-8 rounded-3xl border-2 border-emerald-400 text-center animate-fadeIn">
      <Flower2 className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-spin-slow" />
      <h2 className="text-3xl font-bold text-white mb-4">Секретна Галявина</h2>
      <p className="text-emerald-100 mb-6 leading-relaxed">Ти знайшла це місце! Це означає, що ти дуже уважна до деталей. Ця квітка - символ твоєї краси, яка розквітає з кожним роком все яскравіше. 🌺</p>
      <div className="bg-emerald-900/50 p-4 rounded-xl mb-6">
        <p className="text-white font-bold">Бонус:</p>
        <p className="text-emerald-200 text-sm">Ти можеш загадати одне бажання прямо зараз, і воно обов'язково здійсниться!</p>
      </div>
      <button onClick={() => setCurrentScreen('map')} className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-8 rounded-xl w-full font-bold">Дякую!</button>
    </div>
  </div>
);
export default SecretScreen;