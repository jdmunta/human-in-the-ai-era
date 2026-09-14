export interface JQuestion {
  q: string;
  why: string;
  /** Minimum scrutiny level at which this question earns its cost: 1–3. */
  level: 1 | 2 | 3;
  link?: { href: string; label: string };
}

export interface JStage {
  id: string;
  name: string;
  when: string;
  questions: JQuestion[];
}

/**
 * Scrutiny is set by two properties of the decision, not by how important it
 * feels: whether it can be undone, and whether a mistake announces itself.
 */
export const SCRUTINY = [
  { rev: true,  visible: true,  level: 1, name: 'Light',
    gloss: 'Reversible, and a mistake shows up on its own. Move fast; the feedback loop does the work.' },
  { rev: true,  visible: false, level: 2, name: 'Moderate',
    gloss: 'Reversible, but a mistake stays quiet. You will not be told — so you have to check.' },
  { rev: false, visible: true,  level: 2, name: 'Moderate',
    gloss: 'Hard to undo, though at least you would notice. Slow down before, not after.' },
  { rev: false, visible: false, level: 3, name: 'Maximum',
    gloss: 'Cannot be undone and fails silently. The rarest combination and the one that ends careers.' },
] as const;

export const STAGES: JStage[] = [
  {
    id: 'before',
    name: 'Before you look',
    when: 'Framing — everything here has to happen before you read the output.',
    questions: [
      { level: 1, q: 'What decision does this feed, and what changes depending on the answer?',
        why: 'If nothing changes either way, you are not judging — you are browsing. Establish the stakes before you spend attention.' },
      { level: 1, q: 'What is my own answer, written down, before I see theirs?',
        why: 'The highest-return habit on this list. Once you have read a fluent answer you cannot un-read it, so the only place to record an independent view is upstream of exposure.',
        link: { href: '/topics/judgment', label: 'Commission error' } },
      { level: 2, q: 'What would make me reject this? Name the criterion now.',
        why: 'A rejection criterion invented after the fact is always satisfied. Stated in advance, it is the difference between supervising and watching.' },
      { level: 2, q: 'What does being wrong cost in each direction?',
        why: 'False positives and false negatives are almost never symmetric. Scrutiny should follow the expensive side, not the likely side.' },
    ],
  },
  {
    id: 'claim',
    name: 'On the claim',
    when: 'Evidence — is the thing in front of you actually supported?',
    questions: [
      { level: 1, q: 'What would have to be true for this to be right?',
        why: 'Failures usually sit in the premises, not the reasoning chain. Surfacing the load-bearing assumptions finds them faster than checking the logic.' },
      { level: 1, q: 'Could I verify this without the expertise I just outsourced?',
        why: 'If not, you are in the verification gap and cannot supervise this at all — the low rungs of the ladder are unavailable to you here, however convenient they feel.',
        link: { href: '/topics/judgment', label: 'The verification gap' } },
      { level: 2, q: 'What is the base rate? What usually happens in cases like this?',
        why: 'The inside view is vivid and usually wrong. Ask what the reference class did before asking what makes this case special.' },
      { level: 2, q: 'Is this inside or outside the tool’s competence?',
        why: 'Confidence is flat across the jagged frontier, so the tool cannot tell you which side it is on. Only domain knowledge locates the boundary.',
        link: { href: '/topics/judgment', label: 'The jagged frontier' } },
      { level: 3, q: 'What evidence would distinguish this answer from the next best one?',
        why: 'If the same evidence fits both equally well, you have a story rather than a finding — and stories are what fluent systems are best at.' },
    ],
  },
  {
    id: 'self',
    name: 'On yourself',
    when: 'Calibration — the failure mode you cannot see from the inside.',
    questions: [
      { level: 1, q: 'How confident am I, as a number? What would move it?',
        why: 'Unnumbered confidence cannot be calibrated, and uncalibrated confidence is indistinguishable from guessing with good posture.' },
      { level: 1, q: 'Am I persuaded by the argument, or by the prose?',
        why: 'Fluency is a confidence signal that operates below argument. A well-written wrong answer outperforms a badly-written right one, and these systems are optimised for being well-written.' },
      { level: 2, q: 'What do I want to be true here?',
        why: 'Motivated reasoning never feels like motivated reasoning. Naming the preference out loud is most of the available defence.' },
      { level: 2, q: 'Would I accept this from a competent junior colleague?',
        why: 'The source-swap test. It strips the authority the interface lends and leaves you holding only the content.' },
      { level: 3, q: 'If this is wrong, when and how would I find out?',
        why: 'A decision with no feedback loop cannot teach you anything, which means your judgment will not improve on this class of problem no matter how many you make.' },
    ],
  },
  {
    id: 'frame',
    name: 'On the frame',
    when: 'Second-order — the level where the handover actually happens now.',
    questions: [
      { level: 2, q: 'Is this the right question, and who chose it?',
        why: 'A calculator answers a question you formulated. A model will formulate the question, answer it impeccably, and never mention that it was the wrong one.' },
      { level: 2, q: 'What is outside the frame because nobody asked?',
        why: 'Omission error: the aid becomes your perceptual channel, so whatever it does not attend to, you do not either.',
        link: { href: '/topics/judgment', label: 'Omission error' } },
      { level: 2, q: 'Who bears the downside, and are they in the room?',
        why: 'Costs that fall on absent parties are systematically underweighted — not through malice, just through who is present when the trade-off is made.' },
      { level: 3, q: 'What does this look like at scale, or in three years?',
        why: 'Most consequential error now lives in second-order effects rather than in the first-order answer, which is usually fine.' },
      { level: 3, q: 'What is the strongest case against — stated so its proponent would accept it?',
        why: 'If you cannot pass the ideological Turing test on the opposing view, you have not evaluated it; you have rehearsed against a version you built to lose.',
        link: { href: '/topics/steelman', label: 'Steelmanning' } },
    ],
  },
  {
    id: 'sign',
    name: 'Before you sign',
    when: 'Accountability — the part that outlives the decision.',
    questions: [
      { level: 1, q: 'Do I have the information, the time and the standing to say no?',
        why: 'The three-question test. Any “no” means you hold the liability without the capacity to exercise it — a crumple zone, not an oversight role.',
        link: { href: '/topics/responsibility', label: 'The three-question test' } },
      { level: 2, q: 'Could I explain this to someone it harms?',
        why: 'The clearest available test of whether you actually understand a decision you are about to own.',
        link: { href: '/topics/responsibility', label: 'Responsibility' } },
      { level: 2, q: 'Am I reviewing this, or approving it? Which am I recording?',
        why: 'If you lacked the capacity to review, write down that you approved on the basis of the output and note what you could not check. Unpopular, and the most protective habit available to anyone in the loop.',
        link: { href: '/topics/responsibility', label: 'Reviewed vs approved' } },
      { level: 2, q: 'Is this reversible? If not, what would a smaller version look like?',
        why: 'Irreversible calls deserve a pilot, a staged rollout or a delay. The question is not whether to decide but at what size.' },
    ],
  },
];

export const TOTAL = STAGES.reduce((n, s) => n + s.questions.length, 0);
export const countAt = (level: number) =>
  STAGES.reduce((n, s) => n + s.questions.filter((q) => q.level <= level).length, 0);
