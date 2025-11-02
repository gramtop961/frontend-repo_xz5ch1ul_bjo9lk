import React from 'react';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import AnalyticsSection from './components/AnalyticsSection';
import ModulesGrid from './components/ModulesGrid';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="mb-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Student Management System Dashboard
                </h1>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  Manage students, teachers, courses, attendance, grades, fees, and communications in one modern, secure platform.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
                  New Student
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsOverview />

        {/* Analytics */}
        <div className="mt-6">
          <AnalyticsSection />
        </div>

        {/* Modules */}
        <div className="mt-6">
          <ModulesGrid />
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-slate-500">
          AI-powered insights, role-based access, and real-time notifications included.
        </p>
      </main>
    </div>
  );
};

export default App;
