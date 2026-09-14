export type Side = 'machine' | 'human';
export type Weight = 'slight' | 'strong' | 'categorical';

export interface Axis {
  attr: string;
  side: Side;
  weight: Weight;
  note: string;
}

/**
 * Not a scoreboard. The bottom rows are not "humans are better at this" —
 * they are properties a machine does not have at all, which is a different
 * kind of statement and is marked as such.
 */
export const AXES: Axis[] = [
  { attr: 'Speed',                 side: 'machine', weight: 'categorical', note: 'Not a contest.' },
  { attr: 'Recall',                side: 'machine', weight: 'categorical', note: 'Nor this.' },
  { attr: 'Breadth',               side: 'machine', weight: 'strong',      note: 'Every field at once, shallowly but usefully.' },
  { attr: 'Tirelessness',          side: 'machine', weight: 'categorical', note: 'No fatigue, no mood, no Friday afternoon.' },
  { attr: 'Consistency',           side: 'machine', weight: 'strong',      note: 'Same input, same output. Humans drift.' },
  { attr: 'Cost per unit',         side: 'machine', weight: 'categorical', note: 'Falling; the whole story in one row.' },
  { attr: 'Fluency',               side: 'machine', weight: 'strong',      note: 'Optimised for it — which is the problem.' },
  { attr: 'Calibration at the edge', side: 'human', weight: 'slight',      note: 'Knowing that you do not know. Narrow, contested, real.' },
  { attr: 'Taste',                 side: 'human',   weight: 'strong',      note: 'Selection among competent options is the new bottleneck.' },
  { attr: 'Judgment of what matters', side: 'human', weight: 'strong',     note: 'Which considerations to weight, and how.' },
  { attr: 'Accountability',        side: 'human',   weight: 'categorical', note: 'A model has nothing to lose. It cannot answer for anything.' },
  { attr: 'Stakes',                side: 'human',   weight: 'categorical', note: 'Mortality, consequence, skin in the game.' },
  { attr: 'Being depended upon',   side: 'human',   weight: 'categorical', note: 'It cannot receive your care.' },
  { attr: 'Physical presence',     side: 'human',   weight: 'categorical', note: 'Bodies in a room do things to each other.' },
];

export const WEIGHT_VALUE: Record<Weight, number> = {
  slight: 0.34,
  strong: 0.68,
  categorical: 1,
};

/** Machine competence is jagged where human competence is smooth. */
export const FRONTIER = {
  human:   [92, 88, 84, 79, 74, 68, 62, 55, 48, 40, 32, 24],
  machine: [97, 94, 41, 90, 88, 33, 86, 82, 29, 78, 22, 70],
  confidence: 88,
};
