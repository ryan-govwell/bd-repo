import { useState } from 'react';
import type { Competitor } from '../types';
import { competitorData } from '../data';

interface CompetitorDiscoveryProps {
  competitor: Competitor;
}

const COMPETITOR_THEME: Record<Competitor, { headerBg: string; headerText: string; infoBg: string; infoText: string }> = {
  Accela: {
    headerBg: '#2471A3',
    headerText: '#fff',
    infoBg: '#EBF5FB',
    infoText: '#1A5276',
  },
  OpenGov: {
    headerBg: '#2471A3',
    headerText: '#fff',
    infoBg: '#EBF5FB',
    infoText: '#1A5276',
  },
  iWorq: {
    headerBg: '#7D3C98',
    headerText: '#fff',
    infoBg: '#F5EEF8',
    infoText: '#6C3483',
  },
};

export default function CompetitorDiscovery({ competitor }: CompetitorDiscoveryProps) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const questions = competitorData[competitor] ?? [];
  const theme = COMPETITOR_THEME[competitor];

  const toggle = (idx: number) => {
    setExpanded((prev) => (prev === idx ? null : idx));
  };

  return (
    <div
      style={{ border: '1px solid #E8E0E0' }}
      className="bg-white rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div style={{ backgroundColor: theme.headerBg }} className="px-4 py-3">
        <p style={{ color: theme.headerText }} className="text-sm font-bold">
          ⚔️ {competitor.toUpperCase()} — DISCOVERY QUESTIONS
        </p>
      </div>

      {/* Info bar */}
      <div style={{ backgroundColor: theme.infoBg }} className="px-4 py-2">
        <p style={{ color: theme.infoText }} className="text-xs italic">
          Tap a question to see what we've heard + GovWell's value prop.
        </p>
      </div>

      {/* Accordion questions */}
      <div className="divide-y divide-gray-100">
        {questions.map((q, idx) => {
          const isOpen = expanded === idx;
          return (
            <div key={idx}>
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
              >
                <p className="text-sm font-medium text-gray-800 pr-4">{q.question}</p>
                <span className="text-gray-400 shrink-0 text-xs">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 flex flex-col gap-3">
                  {/* What we've heard */}
                  <div>
                    <p
                      style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
                      className="text-xs font-semibold uppercase mb-1"
                    >
                      What We've Heard
                    </p>
                    <p style={{ color: '#C0392B' }} className="text-sm italic">
                      {q.whatWeHeard}
                    </p>
                  </div>

                  {/* GovWell value prop */}
                  <div>
                    <p
                      style={{ color: '#27AE60', letterSpacing: '0.08em' }}
                      className="text-xs font-semibold uppercase mb-1"
                    >
                      GovWell Value Prop
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="mr-1">🎯</span>
                      {q.govwellValueProp}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
