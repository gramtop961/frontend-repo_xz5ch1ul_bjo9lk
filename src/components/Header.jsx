import React from 'react';
import { Menu, Bell, Search, User, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <Shield className="text-indigo-600" size={24} />
              <span className="font-semibold text-slate-900">EduSphere SMS</span>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="relative w-full max-w-lg">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search students, courses, teachers..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">3</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <User className="text-slate-600" size={18} />
              <div className="leading-tight">
                <p className="text-xs text-slate-500">Logged in as</p>
                <p className="text-sm font-medium text-slate-900">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
