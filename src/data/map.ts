/**
 * The argument's actual dependency structure — hand-authored, not derived from
 * link counts. An edge means "this claim is load-bearing for that one", and the
 * label names the specific idea that carries the weight.
 */
export interface MapNode {
  slug: string;
  label: string;
  n: number;
  x: number;   // viewBox units
  y: number;
  track: 'mechanism' | 'human' | 'collective' | 'meta';
}

export interface MapEdge {
  from: string;
  to: string;
  label: string;
  dashed?: boolean;
}

export const TRACKS = [
  { id: 'mechanism', name: 'The mechanism', gloss: 'What delegation does to the capability itself.' },
  { id: 'human', name: 'The human side', gloss: 'What it does to significance, direction and connection.' },
  { id: 'collective', name: 'The collective', gloss: 'Where both tracks land, at the scale of institutions.' },
  { id: 'meta', name: 'Against', gloss: 'The page that attacks the other twelve.' },
] as const;

export const NODES: MapNode[] = [
  // inputs to judgment
  { slug: 'curiosity',         label: 'Curiosity',        n: 3,  x: 90,  y: 70,  track: 'mechanism' },
  { slug: 'cognitive-fitness', label: 'Cognitive fitness', n: 6, x: 90,  y: 160, track: 'mechanism' },
  { slug: 'communication',     label: 'Communication', n: 11, x: 90, y: 250, track: 'mechanism' },
  // the hinge
  { slug: 'judgment',          label: 'Judgment',         n: 4,  x: 330, y: 160, track: 'mechanism' },
  // consequences
  { slug: 'education',         label: 'Learning',         n: 7,  x: 560, y: 70,  track: 'mechanism' },
  { slug: 'responsibility',    label: 'Responsibility',   n: 5,  x: 560, y: 250, track: 'mechanism' },
  { slug: 'work',              label: 'Work',             n: 9,  x: 560, y: 160, track: 'mechanism' },
  { slug: 'titles',            label: 'Titles & pay',     n: 12, x: 790, y: 250, track: 'collective' },
  // human track
  { slug: 'relationships',     label: 'Relationships',    n: 8,  x: 90,  y: 430, track: 'human' },
  { slug: 'meaning',           label: 'Meaning',          n: 1,  x: 330, y: 430, track: 'human' },
  { slug: 'purpose',           label: 'Purpose',          n: 2,  x: 560, y: 398, track: 'human' },
  // convergence
  { slug: 'civilization',      label: 'Civilization',     n: 10, x: 790, y: 474, track: 'collective' },
  // meta
  { slug: 'steelman',          label: 'Case against', n: 13, x: 330, y: 545, track: 'meta' },
];

export const EDGES: MapEdge[] = [
  { from: 'curiosity',         to: 'judgment',      label: 'question formation' },
  { from: 'cognitive-fitness', to: 'judgment',      label: 'skill retention' },
  { from: 'communication',     to: 'judgment',      label: 'specification' },
  { from: 'judgment',          to: 'education',     label: 'apprenticeship problem' },
  { from: 'judgment',          to: 'responsibility', label: 'verification gap' },
  { from: 'judgment',          to: 'work',          label: 'what stays scarce' },
  { from: 'responsibility',    to: 'titles',        label: 'who signs' },
  { from: 'work',              to: 'titles',        label: 'pay for exposure' },
  { from: 'education',         to: 'work',          label: 'what to learn' },
  { from: 'relationships',     to: 'meaning',       label: 'being needed' },
  { from: 'meaning',           to: 'purpose',       label: 'then chosen' },
  { from: 'meaning',           to: 'civilization',  label: 'latent deprivation' },
  { from: 'work',              to: 'civilization',  label: 'distribution' },
  { from: 'titles',            to: 'civilization',  label: 'positional status' },
  { from: 'purpose',           to: 'civilization',  label: 'stewardship' },
  { from: 'steelman',          to: 'judgment',      label: 'objects', dashed: true },
  { from: 'steelman',          to: 'meaning',       label: 'objects', dashed: true },
];
