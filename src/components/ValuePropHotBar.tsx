import { valuePropData } from '../data';

interface ValuePropHotBarProps {
  activeVP: string | null;
  onToggle: (label: string) => void;
}

export default function ValuePropHotBar({ activeVP, onToggle }: ValuePropHotBarProps) {
  return (
    <div className="px-4 pt-2 pb-2">
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-2"
      >
        💡 Value Prop Hot Bar
      </p>
      <div
        className="flex gap-1.5 flex-wrap"
      >
        {valuePropData.map((vp) => {
          const active = vp.buttonLabel === activeVP;
          return (
            <button
              key={vp.buttonLabel}
              onClick={() => onToggle(vp.buttonLabel)}
              style={
                active
                  ? { backgroundColor: '#1E6E43', color: '#fff', borderColor: '#1E6E43' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
              className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:opacity-90"
            >
              {vp.buttonLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
