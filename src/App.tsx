import { useState, useEffect, useRef, useMemo } from 'react';
import './index.css';
import type { Persona, PainPathway, FocusArea, Competitor } from './types';
import PasswordGate from './components/PasswordGate';
import Header from './components/Header';
import BreadcrumbBar from './components/BreadcrumbBar';
import PersonaSelector from './components/PersonaSelector';
import PainPathwaySelector from './components/PainPathwaySelector';
import FocusAreaSelector from './components/FocusAreaSelector';
import GoalBanner from './components/GoalBanner';
import QuestionsAndValueProps from './components/QuestionsAndValueProps';
import CompetitorDiscovery from './components/CompetitorDiscovery';
import ValuePropHotBar from './components/ValuePropHotBar';
import ObjectionHotBar from './components/ObjectionHotBar';
import { functionalityData, objectionData, valuePropData } from './data';

export default function App() {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('gwcb_auth') === '1');
  const [selectedPersona, setSelectedPersona] = useState<Persona>('Code Enforcement Officer');
  const [selectedPainPathway, setSelectedPainPathway] = useState<PainPathway | null>(null);
  const [selectedFocusArea, setSelectedFocusArea] = useState<FocusArea | null>(null);
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [activeObjection, setActiveObjection] = useState<string | null>(null);
  const [activeValueProp, setActiveValueProp] = useState<string | null>(null);
  const bottomBarsRef = useRef<HTMLDivElement>(null);

  // Close popups when clicking outside the bottom bar container
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (bottomBarsRef.current && !bottomBarsRef.current.contains(e.target as Node)) {
        setActiveObjection(null);
        setActiveValueProp(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Derive active popup content
  const activePopup = useMemo(() => {
    if (activeObjection) {
      const obj = objectionData.find((o) => o.label === activeObjection);
      if (obj) return { type: 'objection' as const, title: obj.label, lines: obj.lines };
    }
    if (activeValueProp) {
      const vp = valuePropData.find((v) => v.buttonLabel === activeValueProp);
      if (vp) return { type: 'vp' as const, title: vp.popupTitle, lines: [vp.description] };
    }
    return null;
  }, [activeObjection, activeValueProp]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  const handleReset = () => {
    setSelectedPainPathway(null);
    setSelectedFocusArea(null);
    setSelectedCompetitor(null);
  };

  const handlePersonaChange = (p: Persona) => {
    setSelectedPersona(p);
    setSelectedPainPathway(null);
    setSelectedFocusArea(null);
    setSelectedCompetitor(null);
  };

  const handlePainPathwayChange = (p: PainPathway) => {
    setSelectedPainPathway(p);
    setSelectedFocusArea(null);
    setSelectedCompetitor(null);
  };

  const handleObjectionToggle = (label: string) => {
    setActiveValueProp(null);
    setActiveObjection((prev) => (prev === label ? null : label));
  };

  const handleValuePropToggle = (label: string) => {
    setActiveObjection(null);
    setActiveValueProp((prev) => (prev === label ? null : label));
  };

  const goalText =
    selectedPainPathway === 'Functionality Pain' && selectedFocusArea
      ? functionalityData[selectedPersona]?.[selectedFocusArea]?.goal ?? null
      : null;

  const showFunctionalityContent =
    selectedPainPathway === 'Functionality Pain' && selectedFocusArea !== null;

  const showCompetitorContent =
    selectedPainPathway === 'Competitor Pain' && selectedCompetitor !== null;

  return (
    <div style={{ backgroundColor: '#FDF2F1', minHeight: '100vh' }}>
      <Header onReset={handleReset} />

      {/* Scrollable main content */}
      <div
        className="mx-auto px-4"
        style={{ maxWidth: '660px', paddingTop: '64px', paddingBottom: '260px' }}
      >
        <BreadcrumbBar
          persona={selectedPersona}
          painPathway={selectedPainPathway}
          focusArea={selectedFocusArea}
          competitor={selectedCompetitor}
        />

        <div className="flex flex-col gap-3 mt-1">
          <PersonaSelector selected={selectedPersona} onChange={handlePersonaChange} />

          <PainPathwaySelector
            selected={selectedPainPathway}
            competitor={selectedCompetitor}
            onSelectPathway={handlePainPathwayChange}
            onSelectCompetitor={setSelectedCompetitor}
          />

          {selectedPainPathway === 'Functionality Pain' && (
            <FocusAreaSelector
              persona={selectedPersona}
              selected={selectedFocusArea}
              onChange={setSelectedFocusArea}
            />
          )}

          {goalText && <GoalBanner goal={goalText} />}

          {showFunctionalityContent && (
            <QuestionsAndValueProps
              persona={selectedPersona}
              focusArea={selectedFocusArea!}
            />
          )}

          {showCompetitorContent && (
            <CompetitorDiscovery competitor={selectedCompetitor!} />
          )}
        </div>
      </div>

      {/* Fixed bottom bars container */}
      <div
        ref={bottomBarsRef}
        style={{ borderTop: '2px solid #C0392B' }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white"
      >
        {/* Shared popup — renders above the bars */}
        {activePopup && (
          <div
            style={{
              border: '1px solid #E8E0E0',
              bottom: '100%',
              marginBottom: '6px',
            }}
            className="absolute left-4 right-4 bg-white rounded-lg px-4 py-3 shadow-lg"
          >
            <p
              style={{ color: activePopup.type === 'objection' ? '#C0392B' : '#1E6E43' }}
              className="text-xs font-bold uppercase tracking-wide mb-2"
            >
              {activePopup.title}
            </p>
            {activePopup.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

        <ValuePropHotBar activeVP={activeValueProp} onToggle={handleValuePropToggle} />
        <ObjectionHotBar activeObjection={activeObjection} onToggle={handleObjectionToggle} />
      </div>
    </div>
  );
}
