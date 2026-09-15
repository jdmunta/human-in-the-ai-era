export interface Term {
  term: string;
  aka?: string;
  topic: string;      // essay slug where it is developed
  origin?: string;    // who coined / where it comes from
  def: string;        // plain-language definition
}

export const GLOSSARY: Term[] = [
  {
    term: 'Apprenticeship problem',
    topic: 'judgment',
    def: 'The work that builds expert judgment is the routine, high-volume junior work — which is exactly what machines do best. Automating it removes the training pipeline for the seniority the system still depends on.',
  },
  {
    term: 'Automation bias',
    topic: 'judgment',
    origin: 'Parasuraman & Riley; Skitka et al.',
    def: 'The tendency to over-trust an automated aid. It splits into omission error (missing what the system did not flag) and commission error (following the system against contrary evidence in front of you).',
  },
  {
    term: 'Capabilities approach',
    topic: 'civilization',
    origin: 'Amartya Sen; Martha Nussbaum',
    def: 'Measure a society by what people are actually able to do and be, rather than by what it produces or what they own. The basis for treating agency, not output, as the indicator that matters.',
  },
  {
    term: 'Agreeableness',
    aka: 'Sycophancy',
    topic: 'communication',
    def: 'These systems are trained to be helpful and to be liked, and those objectives come apart exactly where you need them most: when you are wrong and want confirmation. Agreement you elicited is not evidence.',
  },
  {
    term: 'Comfortable irrelevance',
    topic: 'civilization',
    def: 'Material abundance combined with mass agency loss: nothing hurts, nothing depends on anyone, and no economic indicator can see the decline. The specifically novel failure mode — every previous one involved scarcity.',
  },
  {
    term: 'Commission error',
    topic: 'judgment',
    def: 'Following a system’s recommendation against evidence you can see yourself. Persists even among people who know the tool is fallible, because fluency reads as confidence below the level of argument.',
  },
  {
    term: 'Frame capture',
    topic: 'communication',
    def: 'An excellent answer to the wrong question, delivered with no signal that it was the wrong one. The characteristic failure of a system that answers what it was asked rather than what was meant.',
  },
  {
    term: 'Convivial tool',
    aka: 'The Illich test',
    topic: 'civilization',
    origin: 'Ivan Illich, Tools for Conviviality (1973)',
    def: 'A tool that expands what people can do for themselves, as against one that deepens dependence on a system they cannot inspect or control. The same technology can be either — the difference is interface, ownership and incentives.',
  },
  {
    term: 'Cost signal',
    topic: 'relationships',
    def: 'The part of a gesture that carries meaning because it cost the other person something — time, inconvenience, the chance to be elsewhere. Automating the gesture removes the signal even when nobody finds out.',
  },
  {
    term: 'Delegation Ladder',
    topic: 'judgment',
    def: 'The site’s central rubric. Five rungs — cede, approve, collaborate, critique, reserve — describing how much of a task you hand to a machine. Not a moral ranking; a way to make the choice explicit rather than drifting downward.',
  },
  {
    term: 'Desirable difficulty',
    topic: 'cognitive-fitness',
    origin: 'Robert & Elizabeth Bjork',
    def: 'Conditions that make learning feel slower and harder but produce better retention and transfer. Learners consistently rate them as less effective while performing better on them later — so "this feels effortless" is a warning label.',
  },
  {
    term: 'Extended mind',
    topic: 'cognitive-fitness',
    origin: 'Andy Clark & David Chalmers (1998)',
    def: 'The argument that tools carrying part of your cognition — a notebook, a map, a search engine — are genuinely part of your cognitive system rather than crutches attached to it. Why offloading is normal rather than pathological.',
  },
  {
    term: 'Fungible vs judgment skills',
    topic: 'judgment',
    def: 'A fungible skill’s output can be verified without the skill (long division). A judgment skill’s cannot (clinical reasoning). Atrophy is free in the first case and expensive in the second — which is where the calculator analogy breaks.',
  },
  {
    term: 'Generation effect',
    aka: 'Pretesting effect',
    topic: 'curiosity',
    def: 'Information you produce yourself is retained better than information you read — and being tested before you have learned something improves later retention even when every answer is wrong. The evidence behind "guess first, then ask."',
  },
  {
    term: 'Hollowed middle',
    topic: 'education',
    def: 'Routine cognitive procedure — the competent standard artefact to spec. Where machine capability is strongest, where enormous numbers of careers sat, and the part of the barbell to avoid building on. Also the staircase you still have to climb.',
  },
  {
    term: 'Information gap',
    topic: 'curiosity',
    origin: 'George Loewenstein (1994)',
    def: 'Curiosity as a state produced by the felt distance between what you know and what you want to know. It peaks when the gap is narrow and salient — which is precisely the gap an instant answer closes.',
  },
  {
    term: 'Ironies of automation',
    topic: 'judgment',
    origin: 'Lisanne Bainbridge (1983)',
    def: 'Automation takes the routine, tractable part of a job and leaves the human the irregular and rare part — the hardest part — while removing the routine practice that maintained their fluency for it.',
  },
  {
    term: 'Jagged frontier',
    topic: 'judgment',
    origin: 'Dell’Acqua et al. (2023)',
    def: 'The boundary of machine capability is not a smooth function of difficulty. Two tasks that look equally hard to you fall on opposite sides of it, and the model’s confidence is about the same on both.',
  },
  {
    term: 'Latent deprivation',
    topic: 'meaning',
    origin: 'Marie Jahoda, from the Marienthal study (1933)',
    def: 'Beyond money, paid work supplies time structure, social contact, collective purpose, status and regular activity. Take the job away and the wage is the most replaceable of the losses — which is why a cash transfer alone is an incomplete answer.',
  },
  {
    term: 'Meaningful human control',
    topic: 'override',
    origin: 'Santoni de Sio & van den Hoven (2018)',
    def: 'Control worth the name requires two things: a human who can track what the system is doing well enough to know when it is going wrong, and outcomes that trace to a person who could have acted otherwise. Presence is not control.',
  },
  {
    term: 'Algorithm aversion',
    topic: 'override',
    origin: 'Dietvorst, Simmons & Massey (2015)',
    def: 'People abandon a statistical aid after seeing it err once, while tolerating human colleagues who err constantly. The reason reflexive override is itself a lethal failure mode, and why "keep a human in charge" is not a safety property.',
  },
  {
    term: 'Moral crumple zone',
    topic: 'responsibility',
    origin: 'Madeleine Clare Elish (2019)',
    def: 'The human operator in a highly automated system absorbs the moral and legal force of a failure they had no real capacity to prevent — shielding the system, its designers and its deployers from scrutiny.',
  },
  {
    term: 'Positional good',
    topic: 'titles',
    def: 'Something whose value comes from where it ranks you rather than from what it is. Status is positional, which is why abolishing one hierarchy produces a different one rather than none.',
  },
  {
    term: 'Phronesis',
    aka: 'Practical wisdom',
    topic: 'judgment',
    origin: 'Aristotle, Nicomachean Ethics',
    def: 'The capacity to perceive what a particular situation requires. Aristotle’s claim, which professional training has agreed with for millennia, is that it cannot be taught as rules — only developed through habituation in real situations with real consequences.',
  },
  {
    term: 'Responsibility gap',
    topic: 'responsibility',
    origin: 'Andreas Matthias (2004)',
    def: 'As systems become autonomous and adaptive, nobody satisfies the traditional conditions for being held responsible: the maker could not predict, the operator could not control, the system is not a moral agent. Harm occurs and no attribution is fair.',
  },
  {
    term: 'Sheepskin effect',
    topic: 'education',
    def: 'The disproportionate wage jump for finishing the final year of a degree rather than for accumulating years of it — a central piece of evidence that education partly signals rather than builds capability.',
  },
  {
    term: 'Stake test',
    topic: 'purpose',
    def: 'Three questions a candidate purpose must pass: consequence (do I feel it if it goes badly), particularity (does it need me specifically), duration (can I still be at this in three years). None of them mention enjoyment.',
  },
  {
    term: 'Substitute vs complement',
    topic: 'work',
    origin: 'The task framework in labour economics',
    def: 'Automation acts on tasks, not jobs. Where it substitutes for your tasks your labour is worth less; where it complements them your labour is worth more. The same technology does both to different people at once.',
  },
  {
    term: 'Three-question test',
    topic: 'responsibility',
    def: 'Before accepting a human-in-the-loop role: do I have the information to disagree, the time to disagree, and the standing to disagree without penalty? Any "no" means you are in a crumple zone, not an oversight mechanism.',
  },
  {
    term: 'Verification gap',
    topic: 'judgment',
    def: 'To reliably evaluate work in a domain you need roughly the expertise required to have produced it. This is why "humans will supervise rather than produce" is circular: it keeps the expert judgment while removing the practice that creates it.',
  },
];

export const GLOSSARY_SORTED = [...GLOSSARY].sort((a, b) =>
  a.term.localeCompare(b.term)
);
