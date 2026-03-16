import type { PainPathway, Competitor } from '../types';

// Alphabetized
const COMPETITORS: Competitor[] = [
  'Accela',
  'BSA',
  'CitizenServe',
  'CloudPermit',
  'eTrackit',
  'GeoCivix',
  'GeoPermits',
  'iWorq',
  'MGO',
  'Municity',
  'Munis',
  'OpenGov',
  'TylerEnerGov',
];

const COMPETITOR_COLORS: Record<Competitor, { active: string; border: string }> = {
  Accela:       { active: '#2471A3', border: '#2980B9' },
  BSA:          { active: '#0E7490', border: '#0891B2' },
  CitizenServe: { active: '#C2410C', border: '#EA580C' },
  CloudPermit:  { active: '#1D4ED8', border: '#2563EB' },
  eTrackit:     { active: '#991B1B', border: '#DC2626' },
  GeoCivix:     { active: '#374151', border: '#6B7280' },
  GeoPermits:   { active: '#166534', border: '#16A34A' },
  iWorq:        { active: '#7D3C98', border: '#8E44AD' },
  MGO:          { active: '#92400E', border: '#B45309' },
  Municity:     { active: '#1E3A5F', border: '#1D4ED8' },
  Munis:        { active: '#065F46', border: '#059669' },
  OpenGov:      { active: '#2471A3', border: '#2980B9' },
  TylerEnerGov: { active: '#7C2D12', border: '#EA580C' },
};

interface PainPathwaySelectorProps {
  selected: PainPathway | null;
  competitor: Competitor | null;
  onSelectPathway: (p: PainPathway) => void;
  onSelectCompetitor: (c: Competitor) => void;
}

export default function PainPathwaySelector({
  selected,
  competitor,
  onSelectPathway,
  onSelectCompetitor,
}: PainPathwaySelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Pain Pathway toggle */}
      <div
        style={{ border: '1px solid #E8E0E0' }}
        className="bg-white rounded-lg p-4"
      >
        <p
          style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
          className="text-xs font-semibold uppercase mb-3"
        >
          Pain Pathway
        </p>
        <div className="flex gap-2 flex-wrap">
          {(['Functionality Pain', 'Competitor Pain'] as PainPathway[]).map((p) => {
            const active = p === selected;
            return (
              <button
                key={p}
                onClick={() => onSelectPathway(p)}
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

      {/* Competitor sub-selector */}
      {selected === 'Competitor Pain' && (
        <div
          style={{ border: '1px solid #E8E0E0' }}
          className="bg-white rounded-lg p-4"
        >
          <p
            style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
            className="text-xs font-semibold uppercase mb-3"
          >
            Which System?
          </p>
          <div className="flex gap-2 flex-wrap">
            {COMPETITORS.map((c) => {
              const active = c === competitor;
              const colors = COMPETITOR_COLORS[c];
              return (
                <button
                  key={c}
                  onClick={() => onSelectCompetitor(c)}
                  style={
                    active
                      ? { backgroundColor: colors.active, color: '#fff', borderColor: colors.active }
                      : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
                  }
                  className="text-sm font-medium px-4 py-2 rounded-md border transition-colors hover:opacity-90"
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
