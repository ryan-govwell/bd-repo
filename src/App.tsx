import { useState } from 'react';
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
import ObjectionHotBar from './components/ObjectionHotBar';
import { functionalityData } from './data';

export default function App() {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('gwcb_auth') === '1');
  const [selectedPersona, setSelectedPersona] = useState<Persona>('Code Enforcement Officer');
  const [selectedPainPathway, setSelectedPainPathway] = useState<PainPathway | null>(null);
  const [selectedFocusArea, setSelectedFocusArea] = useState<FocusArea | null>(null);
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [activeObjection, setActiveObjection] = useState<string | null>(null);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  // Reset: clears everything downstream of persona
  const handleReset = () => {
    setSelectedPainPathway(null);
    setSelectedFocusArea(null);
    setSelectedCompetitor(null);
    setActiveObjection(null);
  };

  // Persona change resets downstream
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
    setActiveObjection((prev) => (prev === label ? null : label));
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
        style={{ maxWidth: '660px', paddingTop: '64px', paddingBottom: '160px' }}
      >
        {/* Breadcrumb */}
        <BreadcrumbBar
          persona={selectedPersona}
          painPathway={selectedPainPathway}
          focusArea={selectedFocusArea}
          competitor={selectedCompetitor}
        />

        <div className="flex flex-col gap-3 mt-1">
          {/* Step 1: Persona */}
          <PersonaSelector
            selected={selectedPersona}
            onChange={handlePersonaChange}
          />

          {/* Step 2: Pain Pathway */}
          <PainPathwaySelector
            selected={selectedPainPathway}
            competitor={selectedCompetitor}
            onSelectPathway={handlePainPathwayChange}
            onSelectCompetitor={setSelectedCompetitor}
          />

          {/* Step 3: Focus Area (Functionality Pain only) */}
          {selectedPainPathway === 'Functionality Pain' && (
            <FocusAreaSelector
              persona={selectedPersona}
              selected={selectedFocusArea}
              onChange={setSelectedFocusArea}
            />
          )}

          {/* Goal Banner */}
          {goalText && <GoalBanner goal={goalText} />}

          {/* Questions & Value Props */}
          {showFunctionalityContent && (
            <QuestionsAndValueProps
              persona={selectedPersona}
              focusArea={selectedFocusArea!}
            />
          )}

          {/* Competitor Discovery */}
          {showCompetitorContent && (
            <CompetitorDiscovery competitor={selectedCompetitor!} />
          )}
        </div>
      </div>

      {/* Sticky objection bar */}
      <ObjectionHotBar
        activeObjection={activeObjection}
        onToggle={handleObjectionToggle}
      />
    </div>
  );
}
