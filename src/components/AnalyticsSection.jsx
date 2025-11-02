import React from 'react';
import { BarChart3 } from 'lucide-react';

// Simple, dependency-free inline charts using SVG
const SparkBar = ({ data, color = '#4f46e5' }) => {
  const max = Math.max(...data, 1);
  const barWidth = 100 / data.length;
  return (
    <svg viewBox="0 0 100 30" className="h-16 w-full">
      {data.map((d, i) => {
        const h = (d / max) * 28;
        return (
          <rect
            key={i}
            x={i * barWidth + 2}
            y={30 - h}
            width={barWidth - 3}
            height={h}
            rx="1.5"
            fill={color}
            opacity={0.9}
          />
        );
      })}
    </svg>
  );
};

const Card = ({ title, subtitle, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
      <BarChart3 className="text-slate-400" size={18} />
    </div>
    {children}
  </div>
);

const AnalyticsSection = () => {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <Card title="Attendance Rate" subtitle="Last 8 weeks">
        <SparkBar data={[92, 88, 90, 94, 89, 91, 93, 95]} color="#16a34a" />
        <div className="mt-2 text-xs text-slate-500">Average: 92.8%</div>
      </Card>
      <Card title="Performance Index" subtitle="Term-to-date">
        <SparkBar data={[72, 74, 70, 75, 78, 80, 79, 82]} color="#0ea5e9" />
        <div className="mt-2 text-xs text-slate-500">GPA Trend: rising</div>
      </Card>
      <Card title="Fee Collection" subtitle="Current fiscal year">
        <SparkBar data={[45, 55, 62, 70, 76, 84, 90, 92]} color="#f43f5e" />
        <div className="mt-2 text-xs text-slate-500">Collected: 92% of target</div>
      </Card>
    </section>
  );
};

export default AnalyticsSection;
