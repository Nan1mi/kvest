import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import IntroScreen from './components/IntroScreen';
import MapScreen from './components/MapScreen';
import CrystalScreen from './components/CrystalScreen';
import ChestScreen from './components/ChestScreen';
import TempleScreen from './components/TempleScreen';
import SecretScreen from './components/SecretScreen';
import CharacterScreen from './components/CharacterScreen';
import FinalScreen from './components/FinalScreen';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [particles, setParticles] = useState([]);
  
  // Стан гри
  const [crystalsFound, setCrystalsFound] = useState([]);
  const [chestsOpened, setChestsOpened] = useState([]);
  const [templeAnswers, setTempleAnswers] = useState([]);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [characterResult, setCharacterResult] = useState(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, [currentScreen]);

  // --- ЛОГІКА ВХОДУ (Настя / 170107) ---
  const handleLogin = (name, password) => {
    if (name.trim().toLowerCase() === 'настя' && password.trim() === '170107') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Неправильне ім\'я або пароль! Паймон не пропускає... 🔒');
    }
  };

  const collectCrystal = (id) => {
    if (!crystalsFound.includes(id)) setCrystalsFound([...crystalsFound, id]);
  };

  const openChest = (id, isSpecial) => {
    if (!chestsOpened.includes(id)) setChestsOpened([...chestsOpened, id]);
    if (isSpecial) setSecretUnlocked(true);
  };

  const addTempleAnswer = (character) => {
    setTempleAnswers(prev => [...prev, character]);
  };

  // ЯКЩО НЕ ВВІЙШЛИ - ПОКАЗУЄМО ЛОГІН
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} error={loginError} particles={particles} />;
  }

  const commonProps = { 
    setCurrentScreen, particles, crystalsFound, chestsOpened, 
    templeAnswers, secretUnlocked, characterResult, 
    collectCrystal, openChest, addTempleAnswer, setCharacterResult
  };

  const screens = {
    'welcome': <WelcomeScreen {...commonProps} />,
    'intro': <IntroScreen {...commonProps} />,
    'map': <MapScreen {...commonProps} />,
    'crystal': <CrystalScreen {...commonProps} />,
    'chest': <ChestScreen {...commonProps} />,
    'temple': <TempleScreen {...commonProps} />,
    'secret': <SecretScreen {...commonProps} />,
    'character': <CharacterScreen {...commonProps} />,
    'final': <FinalScreen {...commonProps} />
  };

  return screens[currentScreen] || screens['welcome'];
};

export default App;