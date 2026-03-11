import type { Persona, FocusArea } from '../types';
import { functionalityData } from '../data';

interface QuestionsAndValuePropsProps {
  persona: Persona;
  focusArea: FocusArea;
}

export default function QuestionsAndValueProps({ persona, focusArea }: QuestionsAndValuePropsProps) {
  const data = functionalityData[persona]?.[focusArea];
  if (!data) return null;

  return (
    <div
      style={{ border: '1px solid #E8E0E0' }}
      className="bg-white rounded-lg p-4"
    >
      <p
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
        className="text-xs font-semibold uppercase mb-4"
      >
        Questions &amp; Value Props
      </p>

      <div className="flex flex-col gap-4">
        {data.qvpPairs.map((pair, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            {/* Question row */}
            <div className="flex items-start gap-2">
              <span
                style={{ backgroundColor: '#FDF2F1', color: '#C0392B', border: '1px solid #F5C6C1' }}
                className="text-xs font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5"
              >
                Q{idx + 1}
              </span>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{pair.question}</p>
            </div>

            {/* VP card */}
            <div
              style={{ borderLeft: '3px solid #27AE60', borderTop: '1px solid #E8E0E0', borderRight: '1px solid #E8E0E0', borderBottom: '1px solid #E8E0E0' }}
              className="ml-7 rounded-r-md rounded-bl-md p-3 bg-white"
            >
              <div className="flex items-start gap-2">
                <span
                  style={{ backgroundColor: '#F3F4F6', color: '#6B7280', border: '1px solid #E5E7EB' }}
                  className="text-xs font-bold px-1.5 py-0.5 rounded shrink-0"
                >
                  VP
                </span>
                <div>
                  <p className="text-sm text-gray-800">{pair.vpTitle}</p>
                  <p className="text-xs italic text-gray-500 mt-1 leading-relaxed">{pair.vpDescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
