import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const LoginScreen = ({ onLogin, error, particles }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name, password);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* ФОН: Екран завантаження Genshin */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.alphacoders.com/112/1125979.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80 backdrop-blur-sm"></div>
      </div>

      {particles.map(p => (
        <div key={p.id} className="absolute w-1 h-1 bg-white rounded-full opacity-60" style={{ left: `${p.left}%`, top: '-20px', animation: `float ${p.duration}s linear infinite`, animationDelay: `${p.delay}s` }} />
      ))}

      <div className="relative z-20 w-full max-w-md animate-fadeIn">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full mb-4 animate-bounce">
              <Lock className="w-10 h-10 text-blue-200" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Брама Селестії</h1>
            <p className="text-blue-100 text-sm">Введи дані допуску до Тейвату ✨</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-blue-100 mb-2 font-semibold text-sm ml-1">Ім'я:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-5 py-3 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-black/50 transition-all" placeholder="Настя" required />
            </div>
            <div>
              <label className="block text-blue-100 mb-2 font-semibold text-sm ml-1">Пароль:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-5 py-3 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-black/50 transition-all" placeholder="******" required />
            </div>
            {error && <div className="bg-red-500/20 border border-red-400/50 rounded-xl p-3 text-red-100 text-sm text-center animate-pulse">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-2xl transition-all hover:scale-[1.02] shadow-lg mt-4">Увійти в світ</button>
          </form>
        </div>
      </div>
      <style>{`@keyframes float { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.8; } 100% { transform: translateY(100vh); opacity: 0; } }`}</style>
    </div>
  );
};
export default LoginScreen;