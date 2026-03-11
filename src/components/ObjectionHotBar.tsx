import { useRef, useEffect } from 'react';
import { objectionData } from '../data';

interface ObjectionHotBarProps {
  activeObjection: string | null;
  onToggle: (label: string) => void;
}

export default function ObjectionHotBar({ activeObjection, onToggle }: ObjectionHotBarProps) {
  const row1 = objectionData.slice(0, 4);
  const row2 = objectionData.slice(4);
  const activeData = objectionData.find((o) => o.label === activeObjection) ?? null;
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside the hot bar
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const bar = document.getElementById('objection-hotbar');
      if (bar && !bar.contains(e.target as Node)) {
        if (activeObjection) onToggle(activeObjection);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [activeObjection, onToggle]);

  return (
    <div
      id="objection-hotbar"
      style={{ borderTop: '2px solid #C0392B' }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white px-4 pt-2 pb-3"
    >
      {/* Popup card */}
      {activeData && (
        <div
          ref={popupRef}
          style={{ border: '1px solid #E8E0E0', bottom: '100%', marginBottom: '8px' }}
          className="absolute left-4 right-4 bg-white rounded-lg px-4 py-3 shadow-lg"
        >
          <p
            style={{ color: '#C0392B' }}
            className="text-xs font-bold uppercase tracking-wide mb-2"
          >
            {activeData.label}
          </p>
          {activeData.lines.map((line, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Label */}
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-2"
      >
        🔥 Objection Hot Bar
      </p>

      {/* Row 1 */}
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

      {/* Row 2 */}
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
