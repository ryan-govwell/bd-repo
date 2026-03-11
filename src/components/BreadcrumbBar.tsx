import type { Persona, PainPathway, FocusArea, Competitor } from '../types';
import { functionalityData } from '../data';

interface BreadcrumbBarProps {
  persona: Persona;
  painPathway: PainPathway | null;
  focusArea: FocusArea | null;
  competitor: Competitor | null;
}

export default function BreadcrumbBar({ persona, painPathway, focusArea, competitor }: BreadcrumbBarProps) {
  const focusAreaTitle = focusArea
    ? `${focusArea} — ${functionalityData[persona]?.[focusArea]?.title ?? ''}`
    : null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 flex-wrap">
      {/* Persona pill */}
      <span
        style={{ borderColor: '#C0392B', color: '#C0392B' }}
        className="text-xs font-medium px-2.5 py-1 rounded-full border bg-white"
      >
        {persona}
      </span>

      {painPathway && (
        <>
          <span className="text-gray-400 text-xs">·</span>
          <span
            style={{ borderColor: '#E67E22', color: '#E67E22' }}
            className="text-xs font-medium px-2.5 py-1 rounded-full border bg-white"
          >
            {painPathway}
          </span>
        </>
      )}

      {focusArea && focusAreaTitle && (
        <>
          <span className="text-gray-400 text-xs">·</span>
          <span
            style={{ borderColor: '#27AE60', color: '#27AE60' }}
            className="text-xs font-medium px-2.5 py-1 rounded-full border bg-white"
          >
            {focusAreaTitle}
          </span>
        </>
      )}

      {competitor && (
        <>
          <span className="text-gray-400 text-xs">·</span>
          <span
            style={{
              borderColor: competitor === 'iWorq' ? '#8E44AD' : '#2980B9',
              color: competitor === 'iWorq' ? '#8E44AD' : '#2980B9',
            }}
            className="text-xs font-medium px-2.5 py-1 rounded-full border bg-white"
          >
            {competitor}
          </span>
        </>
      )}
    </div>
  );
}
