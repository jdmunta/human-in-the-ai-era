/**
 * Questions to turn on yourself. Distinct from practices: a practice is
 * something to do, a reflection is something only you can answer — and the
 * useful ones are the ones that are slightly unpleasant to sit with.
 */
export interface Reflection {
  topic: string;
  n: number;
  q: string;
}

const RAW: Record<string, string[]> = {
  meaning: [
    'If your job vanished tomorrow and your income were unaffected, what would you tell people you do?',
    'Of the five latents — time structure, social contact, collective purpose, status, activity — which does only your job supply?',
    'When did you last feel significant in a way that had nothing to do with being useful?',
    'Honestly: what share of your self-worth is currently priced in professional output?',
    'Whose life would visibly change if you stopped showing up? Name them, not a category.',
  ],
  purpose: [
    'What are you the custodian of? If nothing comes to mind within ten seconds, that is the answer.',
    'Which of your commitments survived a bad month, and which are you still re-choosing every morning?',
    'What have you been sampling instead of committing to — and for how long now?',
    'If this stake failed, would you feel it in your body, or only notice it intellectually?',
    'Who would you have to tell if you quit? If the honest answer is nobody, the exit is already open.',
  ],
  curiosity: [
    'When did you last hold a question for a week without looking it up?',
    'What did you get curious about this month that nobody was paying you to be curious about?',
    'Over your last five substantive queries: did you have a guess first, or did you go in empty?',
    'Which of your interests are actually yours, and which are just what was put in front of you?',
    'What are you pretending to understand?',
  ],
  judgment: [
    'When did you last overrule a confident output and turn out to be right? If nothing comes to mind, are you calibrated or just agreeable?',
    'What is the last thing you approved that you could not have produced yourself?',
    'Where does your competence actually end — and would you notice the boundary from the inside?',
    'What would have to happen for you to discover you had been wrong about something you sign off on weekly?',
    'Which of your skills are you maintaining, and which are you merely remembering having had?',
  ],
  responsibility: [
    'What have you signed this month that you could not defend to someone it affected?',
    'When you say “the system decided” — is that a description or an alibi?',
    'Have you ever rejected a recommendation? What happened to you afterwards?',
    'If what you approve goes wrong, who gets named — and is it you, or someone below you?',
    'Are you the crumple zone in any arrangement you have already accepted?',
  ],
  'cognitive-fitness': [
    'What could you do unaided five years ago that you would struggle with today?',
    'When did you last think a problem all the way through without opening anything?',
    'What is the last thing you wrote where the writing changed what you thought?',
    'How much genuinely unfilled time did you have this week — no input, no screen, no audio?',
    'Which of your offloads are free, and which are you quietly paying for later?',
  ],
  education: [
    'What is the last thing you learned the slow way, and what did it cost you?',
    'Are you deep enough in any single domain to catch a confident error in it?',
    'What are you currently learning that a machine will do better than you within three years?',
    'Who looks at your work and tells you what is wrong with it? If nobody does, how would you know?',
    'If your credential evaporated, what could you still demonstrate?',
  ],
  relationships: [
    'Who would notice, within a week, if you disappeared?',
    'What have you sent recently that cost you nothing to send?',
    'Who depends on you — not enjoys you, depends on you?',
    'When did you last do something inconvenient for someone, where the inconvenience was the point?',
    'Has anything lately made other people feel comparatively exhausting?',
  ],
  work: [
    'What share of last week went on tasks a machine now does adequately?',
    'Are you closer to the decision, or closer to the deliverable?',
    'What do you own, other than your labour?',
    'If your field repriced tomorrow, what could you still charge for?',
    'Are you positioned, or are you hoping?',
  ],
  civilization: [
    'What automated decision has been made about you that you could not contest?',
    'What do you confer status on in practice, as opposed to in principle?',
    'Which institutions you depend on could you not inspect, even if you tried?',
    'What are you doing collectively, with people you did not choose?',
    'Does the tool you rely on most expand what you can do alone, or deepen a dependence you cannot audit?',
  ],
  communication: [
    'When something comes back wrong, can you say what you actually wanted — or only that this is not it?',
    'When did you last ask a machine to argue against you, rather than for you?',
    'Are your exchanges mostly for producing, or for thinking? Does your technique reflect which?',
    'What have you accepted recently because it was agreeable rather than because it was right?',
    'How much of what you call a tool problem is actually an undecided question of your own?',
  ],
  titles: [
    'What does your title let you refuse?',
    'Which part of your pay is for hours present, and which is for risk carried?',
    'If your role were described purely by the decisions you own, how senior would it read?',
    'Who in your organisation is answerable for the systems you rely on — by name?',
    'If titles vanished tomorrow, what would status get allocated by instead, where you work?',
  ],
  steelman: [
    'Which objection did you find most comfortable — and what does that preference tell you?',
    'What would actually change your mind about the argument on this site?',
    'Are you reading this to think, or to feel that you have thought?',
    'What is your own strongest objection, and have you written it down anywhere?',
  ],
};

export const REFLECTIONS: Reflection[] = Object.entries(RAW).flatMap(
  ([topic, qs]) => qs.map((q, i) => ({ topic, n: i + 1, q }))
);

export const reflectionsFor = (topic: string): Reflection[] =>
  REFLECTIONS.filter((r) => r.topic === topic).sort((a, b) => a.n - b.n);

export const REFLECTION_TOTAL = REFLECTIONS.length;
