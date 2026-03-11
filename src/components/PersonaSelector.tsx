import type { Persona } from '../types';

const PERSONAS: Persona[] = ['Building Official', 'Code Enforcement Officer', 'Planner'];

interface PersonaSelectorProps {
  selected: Persona;
  onChange: (p: Persona) => void;
}

export default function PersonaSelector({ selected, onChange }: PersonaSelectorProps) {
  return (
    <div
      style={{ border: '1px solid #E8E0E0' }}
      className="bg-white rounded-lg p-4"
    >
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-3"
      >
        Persona
      </p>
      <div className="flex gap-2 flex-wrap">
        {PERSONAS.map((p) => {
          const active = p === selected;
          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              style={
                active
                  ? { backgroundColor: '#7B1F1F', color: '#fff', borderColor: '#7B1F1F' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
              className="text-sm font-medium px-4 py-2 rounded-md border transition-colors hover:opacity-90"
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}
