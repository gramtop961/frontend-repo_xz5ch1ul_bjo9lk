import React from 'react';
import { GraduationCap, Users, BookOpen, DollarSign } from 'lucide-react';

const statCards = [
  {
    title: 'Total Students',
    value: '12,430',
    change: '+2.3% this term',
    icon: GraduationCap,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  },
  {
    title: 'Active Teachers',
    value: '642',
    change: '+12 this month',
    icon: Users,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    title: 'Courses',
    value: '1,280',
    change: '24 new',
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    title: 'Fees Collected',
    value: '$4.2M',
    change: '92% of target',
    icon: DollarSign,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
  },
];

const StatsOverview = () => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map(({ title, value, change, icon: Icon, color }) => (
        <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{title}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
              <p className="mt-1 text-xs text-slate-500">{change}</p>
            </div>
            <div className={`rounded-xl border p-3 ${color}`}>
              <Icon size={20} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsOverview;
