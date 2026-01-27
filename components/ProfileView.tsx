import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

import female from "../images/female.json";
import male from "../images/male.json";

import { UserProfile, UserRole, ThemeMode } from "../types";

const avatarList = [
  { id: "female", label: "Female", gender: "female", animation: female },
  { id: "male", label: "Male", gender: "male", animation: male },
];

interface ProfileViewProps {
  user: UserProfile;
  setUser: (user: UserProfile) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  setUser,
  themeMode,
  setThemeMode,
  onLogout,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<"Profile" | "Settings">(
    "Profile",
  );
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

  // Local form state for editing
  const [editName, setEditName] = useState(user.name);
  const [editBio, setEditBio] = useState(user.bio);
  const [editRegion, setEditRegion] = useState(user.region);

  // ✅ NEW: Avatar state while editing
  const [selectedAvatar, setSelectedAvatar] = useState<any>(user.avatar);

  // Check if profile needs initialization (no bio or no region)
  useEffect(() => {
    if (
      !user.bio ||
      user.bio.includes("Passionate student editor") ||
      !user.region ||
      user.region === "Delhi NCR"
    ) {
      setShowUpgradePrompt(true);
    }
  }, []);

  const saveProfile = () => {
    setUser({
      ...user,
      name: editName,
      bio: editBio,
      region: editRegion,
      avatar: selectedAvatar, // ✅ saving selected avatar
    });
    setIsEditingProfile(false);
    setShowUpgradePrompt(false);
  };

  const openEditor = () => {
    setEditName(user.name);
    setEditBio(user.bio);
    setEditRegion(user.region);
    setSelectedAvatar(user.avatar); // ✅ load current avatar in editor
    setIsEditingProfile(true);
  };

  return (
    <div className="space-y-8 pb-10 animate-fadeIn">
      {/* Profile Header */}
      <section className="relative pt-12 text-center flex flex-col items-center">
        <div className="w-28 h-28 rounded-full border-4 border-indigo-500 p-1 mb-4 shadow-2xl relative group overflow-hidden">
          {/* ✅ REPLACED IMG WITH LOTTIE */}
          <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-inner flex items-center justify-center">
            <Lottie animationData={user.avatar} loop={true} />
          </div>

          <div
            onClick={openEditor}
            className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-black font-montserrat text-slate-900 dark:text-white">
          {user.name}
        </h2>

        <div className="flex items-center space-x-2 mt-1">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            {user.role === UserRole.VIEWER
              ? "Creative Enthusiast"
              : "Official Organization"}
          </p>
          <span className="text-slate-300">•</span>
          <p className="text-indigo-500 text-[10px] font-bold uppercase tracking-widest">
            {user.region || "Region Unset"}
          </p>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-sm px-4 line-clamp-2 italic">
          {user.bio
            ? `"${user.bio}"`
            : "Tap 'Edit Details' to set your bio and introduce yourself to the community."}
        </p>

        <div className="flex space-x-8 mt-8">
          <div className="text-center group cursor-default">
            <p className="text-xl font-black group-hover:text-indigo-500 transition-colors">
              {user.role === UserRole.VIEWER ? user.bookmarks.length : "12"}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {user.role === UserRole.VIEWER ? "Saved" : "Uploads"}
            </p>
          </div>
          <div className="text-center group cursor-default">
            <p className="text-xl font-black group-hover:text-indigo-500 transition-colors">
              {user.role === UserRole.VIEWER ? "14" : "45.2k"}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {user.role === UserRole.VIEWER ? "Badges" : "Views"}
            </p>
          </div>
          <div className="text-center group cursor-default">
            <p className="text-xl font-black group-hover:text-indigo-500 transition-colors">
              {user.role === UserRole.VIEWER ? "128" : "8.1k"}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {user.role === UserRole.VIEWER ? "Hearts" : "Likes"}
            </p>
          </div>
        </div>
      </section>

      {/* Internal Tabs */}
      <div className="flex border-b border-gray-100 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-10">
        {["Profile", "Settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab as any)}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
              activeSubTab === tab
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeSubTab === "Profile" && (
        <section className="space-y-6 animate-slideInRight">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
              About Me
            </h3>
            <button
              onClick={openEditor}
              className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest"
            >
              Edit Details
            </button>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
            {user.bio || "No information provided yet."}
          </div>
        </section>
      )}

      {activeSubTab === "Settings" && (
        <section className="space-y-8 animate-slideInRight">
          <div className="space-y-4">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Display Theme
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: ThemeMode.LIGHT, label: "Light" },
                { id: ThemeMode.DARK, label: "Dark" },
                { id: ThemeMode.DEFAULT, label: "Auto" },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setThemeMode(mode.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-[28px] border-2 transition-all ${
                    themeMode === mode.id
                      ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20"
                      : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-200"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${
                      themeMode === mode.id
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-slate-500"
                    }`}
                  >
                    {mode.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center p-5 text-rose-500 font-black text-[11px] uppercase tracking-[0.2em] bg-rose-50 dark:bg-rose-950/20 rounded-[24px] border border-rose-100 dark:border-rose-900/30 hover:bg-rose-100 transition-colors shadow-sm"
          >
            Logout & Switch to Guest
          </button>
        </section>
      )}

      {/* Profile Upgrade / Initialization Popup */}
      {(showUpgradePrompt || isEditingProfile) && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-t-[40px] sm:rounded-[40px] p-8 shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-black font-montserrat tracking-tight">
                  {showUpgradePrompt
                    ? "Upgrade Your Profile"
                    : "Modify Profile"}
                </h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {showUpgradePrompt
                    ? "Tell us more about yourself"
                    : "Personalize your experience"}
                </p>
              </div>

              {!showUpgradePrompt && (
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="p-2 text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="space-y-6">
              {/* ✅ AVATAR PICKER */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Choose Avatar
                </label>

                <div className="grid grid-cols-2 gap-4">
                  {avatarList.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setSelectedAvatar(a.animation)}
                      className={`p-4 rounded-3xl border-2 transition-all ${
                        selectedAvatar === a.animation
                          ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20"
                          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Lottie animationData={a.animation} loop={true} />
                      </div>

                      <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-gray-500 text-center">
                        {a.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Region / Location
                </label>
                <input
                  type="text"
                  value={editRegion}
                  onChange={(e) => setEditRegion(e.target.value)}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Bio
                </label>
                <textarea
                  value={editBio}
                  rows={3}
                  onChange={(e) => setEditBio(e.target.value)}
                  placeholder="Write a short description about yourself..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                onClick={saveProfile}
                className="w-full bg-indigo-600 text-white p-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all active:scale-95"
              >
                Save & Upgrade
              </button>

              {showUpgradePrompt && (
                <button
                  onClick={() => setShowUpgradePrompt(false)}
                  className="w-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-600"
                >
                  Skip for now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
