export type Persona = 'Building Official' | 'Code Enforcement Officer' | 'Planner';
export type PainPathway = 'Functionality Pain' | 'Competitor Pain';
export type FocusArea = 'PP1' | 'PP2' | 'PP3';
export type Competitor = 'Accela' | 'OpenGov' | 'iWorq';

export interface QVPPair {
  question: string;
  vpTitle: string;
  vpDescription: string;
}

export interface FocusAreaData {
  label: string;
  title: string;
  goal: string;
  qvpPairs: QVPPair[];
}

export interface PersonaFocusAreas {
  PP1: FocusAreaData;
  PP2: FocusAreaData;
  PP3: FocusAreaData;
}

export interface CompetitorQuestion {
  question: string;
  whatWeHeard: string;
  govwellValueProp: string;
}

export interface ObjectionResponse {
  label: string;
  lines: string[];
}
