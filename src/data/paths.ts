export interface ReadingPath {
  id: string;
  name: string;
  who: string;
  minutes: number;
  steps: { slug?: string; page?: string; label: string; why: string }[];
}

/** Curated entry routes — 18,000 words is a lot to walk into cold. */
export const PATHS: ReadingPath[] = [
  {
    id: 'twenty',
    name: 'If you have twenty minutes',
    who: 'The single strongest argument on the site, plus the framework it produces.',
    minutes: 20,
    steps: [
      { slug: 'judgment', label: 'The Ironies of Automation', why: 'The core claim: judgment is the last thing automated and the first to atrophy.' },
      { page: '/ladder', label: 'The Delegation Ladder', why: 'The rubric that falls out of it — what to hand over, what to keep.' },
    ],
  },
  {
    id: 'student',
    name: 'If you are choosing a degree',
    who: 'Eighteen, or advising someone who is.',
    minutes: 38,
    steps: [
      { slug: 'education', label: 'What the University Is Still For', why: 'The four functions, the honest rubric, and what to learn instead.' },
      { slug: 'work', label: 'Complement or Substitute', why: 'Where the value actually goes when intelligence gets cheap.' },
      { slug: 'curiosity', label: 'The Anesthetic and the Amplifier', why: 'How to use the tools so they make you formidable rather than fluent.' },
    ],
  },
  {
    id: 'manager',
    name: 'If you lead people',
    who: 'You are deciding how AI enters someone else’s work, not just your own.',
    minutes: 37,
    steps: [
      { slug: 'responsibility', label: 'You Cannot Delegate Accountability', why: 'The three-question test, before you put anyone in the loop.' },
      { slug: 'judgment', label: 'The Ironies of Automation', why: 'Why your review step may be decorative, and what the aviation record did about it.' },
      { slug: 'education', label: 'What the University Is Still For', why: 'The apprenticeship problem: automating junior work eats your senior pipeline.' },
    ],
  },
  {
    id: 'midcareer',
    name: 'If your skill is being commoditised',
    who: 'Mid-career, watching the thing you were good at get cheap.',
    minutes: 35,
    steps: [
      { slug: 'work', label: 'Complement or Substitute', why: 'Task audit, not job audit. Your exposure is a number you can compute.' },
      { slug: 'meaning', label: 'Meaning Was Never the Job', why: 'The identity problem underneath the economic one — usually the harder half.' },
      { slug: 'education', label: 'What the University Is Still For', why: 'Read the last section first: domain depth is the half that takes twenty years.' },
    ],
  },
  {
    id: 'sceptic',
    name: 'If you think this is overblown',
    who: 'Reasonable. The base rate for this genre of worry is poor.',
    minutes: 33,
    steps: [
      { slug: 'steelman', label: 'The Case Against This Site', why: 'Seven objections. Four of them we concede.' },
      { slug: 'cognitive-fitness', label: 'We Built Forklifts, Then We Built Gyms', why: 'The narrow, falsifiable version of the atrophy claim.' },
      { slug: 'judgment', label: 'The Ironies of Automation', why: 'Then judge whether the strongest positive case survives your objections.' },
    ],
  },
  {
    id: 'doing',
    name: 'If you just want to do something',
    who: 'Skip the argument. Go straight to the actions.',
    minutes: 12,
    steps: [
      { page: '/audit', label: 'Cognitive Autonomy Audit', why: 'Fifteen questions. Find which dimension is actually your exposure.' },
      { page: '/playbook', label: 'The Playbook', why: 'Filter to “in the moment” and adopt two things this week.' },
    ],
  },
];
