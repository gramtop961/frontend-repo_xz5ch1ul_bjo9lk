import React from 'react';
import {
  GraduationCap,
  Users,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  DollarSign,
  MessageSquare,
  Settings,
} from 'lucide-react';

const modules = [
  {
    title: 'Students',
    desc: 'Manage profiles, IDs, and documents',
    icon: GraduationCap,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  },
  {
    title: 'Teachers',
    desc: 'Assign courses, roles, and schedules',
    icon: Users,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    title: 'Courses',
    desc: 'Departments, curriculum, and timetables',
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    title: 'Attendance',
    desc: 'Track percentage and QR check-ins',
    icon: CalendarCheck,
    color: 'bg-sky-50 text-sky-600 border-sky-200',
  },
  {
    title: 'Grades',
    desc: 'Assessments, exams, and transcripts',
    icon: ClipboardCheck,
    color: 'bg-violet-50 text-violet-600 border-violet-200',
  },
  {
    title: 'Fees',
    desc: 'Invoices, payments, and reminders',
    icon: DollarSign,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
  },
  {
    title: 'Communication',
    desc: 'Announcements, email & SMS alerts',
    icon: MessageSquare,
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
  },
  {
    title: 'Settings',
    desc: 'Roles, access control, and backups',
    icon: Settings,
    color: 'bg-slate-50 text-slate-600 border-slate-200',
  },
];

const ModulesGrid = () => {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Core Modules</h2>
        <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Add New</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map(({ title, desc, icon: Icon, color }) => (
          <button
            key={title}
            className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className={`rounded-xl border p-3 ${color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
                <p className="mt-3 text-xs font-medium text-indigo-600 group-hover:underline">Open Module →</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;
