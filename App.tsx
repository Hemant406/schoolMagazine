
import React, { useState, useEffect } from 'react';
import { AppTab, UserRole, ThemeMode, UserProfile } from './types';
import { INITIAL_USER } from './constants';
import Navigation from './components/Navigation';
import Header from './components/Header';
import HomeView from './components/HomeView';
import MagazinesView from './components/MagazinesView';
import SearchView from './components/SearchView';
import VideosView from './components/VideosView';
import ProfileView from './components/ProfileView';
import MagazineReader from './components/MagazineReader';
import AuthGateway from './components/AuthGateway';
import OrgDashboard from './components/OrgDashboard';
import Footer from './components/Footer';
import female from "./images/female.json";
import male from "./images/male.json";


const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.HOME);
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.DEFAULT);
  const [readingMagazineId, setReadingMagazineId] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingMagazineId, setPendingMagazineId] = useState<string | null>(null);

  // Apply theme to body
  useEffect(() => {
    const isDark = themeMode === ThemeMode.DARK || (themeMode === ThemeMode.DEFAULT && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-950', 'text-white');
      document.body.classList.remove('bg-gray-50', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-gray-50', 'text-slate-900');
      document.body.classList.remove('bg-slate-950', 'text-white');
    }
  }, [themeMode]);

  const handleReadMagazine = (id: string) => {
    if (!user) {
      setPendingMagazineId(id);
      setShowAuthModal(true);
    } else {
      setReadingMagazineId(id);
    }
  };

  const handleLogin = (role: UserRole, data?: { name: string }) => {
  const newUser: UserProfile = {
    ...INITIAL_USER,
    role,
    name: data?.name || INITIAL_USER.name,
    bio: "",
    region: "",
    bookmarks: [],
    viewHistory: [],
    avatar: female, // ✅ default Lottie avatar
  };

  if (role === UserRole.ORGANIZATION) {
    newUser.name = "Modern Academy";
    newUser.bio = "Dedicated to educational excellence.";
    newUser.region = "International";
    newUser.avatar = male; // ✅ organization avatar (Lottie)
    setCurrentTab(AppTab.DASHBOARD);
  } else {
    // ✅ Viewer avatar based on name (optional)
    if (data?.name) {
      newUser.avatar =
        data.name.toLowerCase().includes("a") ||
        data.name.toLowerCase().includes("e")
          ? female
          : male;
    }

    if (pendingMagazineId) {
      setReadingMagazineId(pendingMagazineId);
      setPendingMagazineId(null);
    }
  }

  setUser(newUser);
  setShowAuthModal(false);
};


  const handleLogout = () => {
    setUser(null);
    setCurrentTab(AppTab.HOME);
    setReadingMagazineId(null);
    setPendingMagazineId(null);
  };

  const renderView = () => {
    if (user?.role === UserRole.ORGANIZATION) {
      switch (currentTab) {
        case AppTab.DASHBOARD:
          return <OrgDashboard user={user} />;
        case AppTab.PROFILE:
          return <ProfileView user={user} setUser={setUser} themeMode={themeMode} setThemeMode={setThemeMode} onLogout={handleLogout} />;
        default:
          return <OrgDashboard user={user} />;
      }
    }

    switch (currentTab) {
      case AppTab.HOME:
        return <HomeView onRead={handleReadMagazine} onNavigate={setCurrentTab} />;
      case AppTab.MAGAZINES:
        return <MagazinesView onRead={handleReadMagazine} />;
      case AppTab.SEARCH:
        return <SearchView onRead={handleReadMagazine} />;
      case AppTab.VIDEOS:
        return <VideosView />;
      case AppTab.PROFILE:
        return user ? (
          <ProfileView user={user} setUser={setUser} themeMode={themeMode} setThemeMode={setThemeMode} onLogout={handleLogout} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="text-4xl">🔒</div>
            <h2 className="text-xl font-black">Login Required</h2>
            <p className="text-gray-500 max-w-xs mx-auto">Please sign in to view your personalized creative profile.</p>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20"
            >
              Log In Now
            </button>
          </div>
        );
      default:
        return <HomeView onRead={handleReadMagazine} onNavigate={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header 
        activeTab={currentTab} 
        onTabChange={setCurrentTab} 
        user={user} 
        onLoginClick={() => setShowAuthModal(true)}
      />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-32">
        {renderView()}
      </main>
      
      {readingMagazineId && (
        <MagazineReader 
          magazineId={readingMagazineId} 
          onClose={() => setReadingMagazineId(null)} 
        />
      )}

      {showAuthModal && (
        <AuthGateway 
          onSelectRole={handleLogin} 
          onClose={() => {
            setShowAuthModal(false);
            setPendingMagazineId(null);
          }} 
        />
      )}


      <Footer/>
      

      <div className="md:hidden">
        <Navigation 
          activeTab={currentTab} 
          onTabChange={setCurrentTab} 
          role={user?.role || UserRole.VIEWER} 
        />
      </div>
    </div>
  );
};

export default App;
