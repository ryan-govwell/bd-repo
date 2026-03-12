import { objectionData } from '../data';

interface ObjectionHotBarProps {
  activeObjection: string | null;
  onToggle: (label: string) => void;
}

export default function ObjectionHotBar({ activeObjection, onToggle }: ObjectionHotBarProps) {
  const row1 = objectionData.slice(0, 4);
  const row2 = objectionData.slice(4);

  return (
    <div className="px-4 pt-2 pb-3" style={{ borderTop: '1px solid #E5E7EB' }}>
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-2"
      >
        🔥 Objection Hot Bar
      </p>

      <div className="flex gap-1.5 flex-wrap mb-1.5">
        {row1.map((obj) => {
          const active = obj.label === activeObjection;
          return (
            <button
              key={obj.label}
              onClick={() => onToggle(obj.label)}
              style={
                active
                  ? { backgroundColor: '#7B1F1F', color: '#fff', borderColor: '#7B1F1F' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
              className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:opacity-90"
            >
              {obj.label}
            </button>
          );
        })}
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {row2.map((obj) => {
          const active = obj.label === activeObjection;
          return (
            <button
              key={obj.label}
              onClick={() => onToggle(obj.label)}
              style={
                active
                  ? { backgroundColor: '#7B1F1F', color: '#fff', borderColor: '#7B1F1F' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
              className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:opacity-90"
            >
              {obj.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
