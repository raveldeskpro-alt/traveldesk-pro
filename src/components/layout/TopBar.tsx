"use client";

import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Bell, Globe, LogOut, Search, User, ChevronDown } from "lucide-react";
import { getInitials } from "@/lib/utils";
import { useState } from "react";

export default function TopBar() {
  const { user, logout, agency } = useAuth();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 md:px-6 lg:px-8">
      <div className={`flex items-center gap-4 flex-1 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className="relative w-full max-w-md">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t("search")}
            className="form-control py-2 ps-9 pe-3"
          />
        </div>
      </div>

      <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            aria-label="Change language"
            className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="uppercase">{language}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          {showLangMenu && (
            <div className="absolute end-0 top-full z-50 mt-1 min-w-[120px] rounded-md border border-slate-200 bg-white py-1 shadow-surface dark:border-slate-700 dark:bg-slate-900">
              <button
                onClick={() => { setLanguage("en"); setShowLangMenu(false); }}
                className={`w-full px-3 py-2 text-start text-sm hover:bg-slate-50 dark:hover:bg-slate-800 ${language === "en" ? "font-medium text-brand" : "text-slate-700 dark:text-slate-200"}`}
              >
                English
              </button>
              <button
                onClick={() => { setLanguage("ar"); setShowLangMenu(false); }}
                className={`w-full px-3 py-2 text-start text-sm hover:bg-slate-50 dark:hover:bg-slate-800 ${language === "ar" ? "font-medium text-brand" : "text-slate-700 dark:text-slate-200"}`}
              >
                العربية
              </button>
            </div>
          )}
        </div>

        <button aria-label="Notifications" className="relative rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-slate-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full border-2 border-white"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="Open profile menu"
            className="flex items-center gap-2 rounded-md py-1.5 ps-2 pe-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <div className="w-8 h-8 rounded-full bg-deep-blue text-white flex items-center justify-center text-xs font-bold">
              {getInitials(user?.name || "U")}
            </div>
            <div className={`hidden md:block text-left ${isRTL ? "text-right" : "text-left"}`}>
              <p className="text-sm font-semibold text-slate-900 leading-tight">{user?.name}</p>
              <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400 hidden md:block" />
          </button>

          {showUserMenu && (
            <div className="absolute end-0 top-full z-50 mt-1 min-w-[180px] rounded-md border border-slate-200 bg-white py-1 shadow-surface dark:border-slate-700 dark:bg-slate-900">
              <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{agency?.name}</p>
              </div>
              <button
                onClick={() => { setShowUserMenu(false); }}
                className="flex w-full items-center gap-2 px-3 py-2 text-start text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <User className="w-4 h-4" />
                <span>{t("profile")}</span>
              </button>
              <button
                onClick={() => { setShowUserMenu(false); logout(); }}
                className="flex w-full items-center gap-2 px-3 py-2 text-start text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <LogOut className="w-4 h-4" />
                <span>{t("logout")}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
