import type { Persona, FocusArea } from '../types';
import { functionalityData } from '../data';

interface FocusAreaSelectorProps {
  persona: Persona;
  selected: FocusArea | null;
  onChange: (fa: FocusArea) => void;
}

const FOCUS_AREAS: FocusArea[] = ['PP1', 'PP2', 'PP3'];

export default function FocusAreaSelector({ persona, selected, onChange }: FocusAreaSelectorProps) {
  const areas = functionalityData[persona];

  return (
    <div
      style={{ border: '1px solid #E8E0E0' }}
      className="bg-white rounded-lg p-4"
    >
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-3"
      >
        Focus Area
      </p>
      <div className="grid grid-cols-3 gap-2">
        {FOCUS_AREAS.map((fa) => {
          const active = fa === selected;
          const area = areas[fa];
          return (
            <button
              key={fa}
              onClick={() => onChange(fa)}
              style={
                active
                  ? { backgroundColor: '#7B1F1F', color: '#fff', borderColor: '#7B1F1F' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
              className="text-left px-3 py-3 rounded-md border transition-colors hover:opacity-90"
            >
              <p
                style={{ color: active ? 'rgba(255,255,255,0.65)' : '#9CA3AF' }}
                className="text-xs font-semibold uppercase mb-1"
              >
                {fa}
              </p>
              <p className="text-xs font-medium leading-snug">{area.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
