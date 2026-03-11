import type { PainPathway, Competitor } from '../types';

const COMPETITORS: Competitor[] = ['Accela', 'OpenGov', 'iWorq'];

const COMPETITOR_COLORS: Record<Competitor, { active: string; border: string }> = {
  Accela: { active: '#2471A3', border: '#2980B9' },
  OpenGov: { active: '#2471A3', border: '#2980B9' },
  iWorq: { active: '#7D3C98', border: '#8E44AD' },
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
