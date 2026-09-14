// GENERATED from the <Practice> blocks in src/content/topics/*.mdx.
// Single source of truth: essays and /playbook both render from here.

export type Cadence = 'daily' | 'weekly' | 'periodic' | 'standing' | 'structural' | 'meta';

export interface Practice {
  topic: string;
  kicker: string;
  n: number;
  title: string;
  body: string;
  cadence: Cadence;
  rung: number;
  inPlaybook: boolean;
}

export const PRACTICE_LABELS: Record<string, string> = {
  "civilization": "Practices at civic scale",
  "steelman": "How to use this page"
};

export const PRACTICES: Practice[] = [
  {
    "topic": "meaning",
    "kicker": "Meaning",
    "n": 1,
    "title": "Audit your meaning portfolio",
    "body": "Write down, honestly, where your sense of significance currently comes from, and what share each source holds. If more than half sits in professional output, you are concentrated in the one asset class that AI is repricing. Diversification here is not a metaphor.",
    "cadence": "periodic",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "meaning",
    "kicker": "Meaning",
    "n": 2,
    "title": "Rebuild the five latents deliberately",
    "body": "Time structure, social contact, collective purpose, status, activity. For each, name the specific thing in your week that supplies it. Any latent supplied <em>only</em> by your job is a single point of failure.",
    "cadence": "periodic",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "meaning",
    "kicker": "Meaning",
    "n": 3,
    "title": "Find something that would degrade without you",
    "body": "Not something you enjoy — something that would visibly get worse if you stopped. A garden, a class, an ageing parent, a club's accounts, a neighbourhood. Consequence is the ingredient that leisure cannot fake.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "meaning",
    "kicker": "Meaning",
    "n": 4,
    "title": "Change the first question",
    "body": "Stop asking new people what they do. Ask what they are working on, or what they have changed their mind about. You will notice how hard the old question is to dislodge, which is the point.",
    "cadence": "daily",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "purpose",
    "kicker": "Purpose",
    "n": 1,
    "title": "Run the stake test on what you already do",
    "body": "Take your three largest time commitments and score each on consequence, particularity and duration. Most people discover their biggest time sink fails all three, and something they treat as peripheral passes all three.",
    "cadence": "periodic",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "purpose",
    "kicker": "Purpose",
    "n": 2,
    "title": "Close one exit",
    "body": "Take one commitment you keep half-making and make it expensive to leave: tell someone specific, put it on a recurring calendar, pay for it, or partner with a person who will notice your absence.",
    "cadence": "structural",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "purpose",
    "kicker": "Purpose",
    "n": 3,
    "title": "Declare a stewardship",
    "body": "Name one thing you are the custodian of. Write down what happens to it if you stop. If nothing happens, you have not found it yet.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "purpose",
    "kicker": "Purpose",
    "n": 4,
    "title": "Set an optionality budget",
    "body": "Decide in advance how long you will explore before committing — a season, not a feeling. Infinite sampling is the failure mode the tools now actively encourage.",
    "cadence": "periodic",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "curiosity",
    "kicker": "Curiosity",
    "n": 1,
    "title": "The ninety-second guess",
    "body": "Before any substantive query, write your predicted answer and a confidence percentage. Keep them in one running file. Review it monthly — the pattern of where you are overconfident is worth more than any single answer you received.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "curiosity",
    "kicker": "Curiosity",
    "n": 2,
    "title": "Keep a question ledger",
    "body": "Maintain a list of questions you have <em>not</em> looked up. Let items sit for a week. The ones that keep resurfacing are your actual interests, as distinct from your momentary ones. Follow those hard.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "curiosity",
    "kicker": "Curiosity",
    "n": 3,
    "title": "Ask for the disagreement, not the answer",
    "body": "\"What do serious people disagree about here, and what is the strongest case on each side?\" produces a map. \"What is the answer?\" produces a destination. Maps sustain curiosity; destinations end it.",
    "cadence": "daily",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "curiosity",
    "kicker": "Curiosity",
    "n": 4,
    "title": "Protect one unassisted domain",
    "body": "Choose one field you learn the slow way — books, practice, other humans, dead ends. Not because it is efficient. Because it is the only way to remember what forming a question from scratch feels like.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "judgment",
    "kicker": "Judgment",
    "n": 1,
    "title": "Unaided first, always, on anything consequential",
    "body": "Reach your own conclusion and write it down before you open the tool. This single sequencing rule neutralises commission error, which is the dominant failure mode. It costs minutes and it is the highest-return habit on this site.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "judgment",
    "kicker": "Judgment",
    "n": 2,
    "title": "Pre-register the prediction",
    "body": "Before delegating, record what you expect the output to say and what would make you reject it. If you cannot state a rejection criterion in advance, you are not supervising — you are watching.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "judgment",
    "kicker": "Judgment",
    "n": 3,
    "title": "Schedule manual reps",
    "body": "Borrow the aviation fix outright. Block time — weekly, non-negotiable — for work you do unassisted that you could easily have delegated. Treat it as training load, not as productivity.",
    "cadence": "weekly",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "judgment",
    "kicker": "Judgment",
    "n": 4,
    "title": "Probe for the frontier deliberately",
    "body": "Regularly give the tool problems where you already know the answer is subtle. You are not testing the tool; you are building a map of where its confidence and its competence come apart.",
    "cadence": "periodic",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "judgment",
    "kicker": "Judgment",
    "n": 5,
    "title": "Defend the apprenticeship",
    "body": "If you lead people: protect some junior work from automation on the explicit grounds that it manufactures senior people. This is a real cost with a delayed return, which is exactly why nobody will do it unless it is named and defended out loud.",
    "cadence": "structural",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "responsibility",
    "kicker": "Responsibility",
    "n": 1,
    "title": "Run the three-question test before you accept a review role",
    "body": "Information, time, standing. Ask about all three before the deployment, not after the incident. Nobody will volunteer the answers.",
    "cadence": "periodic",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "responsibility",
    "kicker": "Responsibility",
    "n": 2,
    "title": "Distinguish 'reviewed' from 'approved' in writing",
    "body": "If you did not have the capacity to review, record that you approved on the basis of the system's output and note what you could not check. This is unpopular and it is the single most protective habit available to a person in the slot.",
    "cadence": "daily",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "responsibility",
    "kicker": "Responsibility",
    "n": 3,
    "title": "Keep the subject in the sentence",
    "body": "Never write \"the model decided.\" Write \"I accepted the model's recommendation.\" The grammar is not cosmetic; it is where responsibility either persists or dissolves.",
    "cadence": "daily",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "responsibility",
    "kicker": "Responsibility",
    "n": 4,
    "title": "Ask who signs, and whether they can actually refuse",
    "body": "For any AI system you deploy, name the accountable person and then verify their refusal has teeth. If refusing is career-ending or throughput-breaking, you do not have oversight — and you should say so before you need to.",
    "cadence": "structural",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "cognitive-fitness",
    "kicker": "Cognitive Fitness",
    "n": 1,
    "title": "Retrieve before you reference",
    "body": "Whenever you reach for a lookup, spend fifteen seconds trying to recall it first. Failed retrieval attempts still strengthen memory — the attempt is the active ingredient, not the success.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "cognitive-fitness",
    "kicker": "Cognitive Fitness",
    "n": 2,
    "title": "Write the first draft yourself, always",
    "body": "Not for craft reasons. Because the first draft is where you discover what you actually think, and a generated first draft skips that discovery while leaving you convinced it happened.",
    "cadence": "daily",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "cognitive-fitness",
    "kicker": "Cognitive Fitness",
    "n": 3,
    "title": "Keep one long-form reading habit",
    "body": "Sustained attention on a single argument for hours is a trainable capacity that is currently in free fall. Books, on paper, without a second screen. This is the endurance work.",
    "cadence": "weekly",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "cognitive-fitness",
    "kicker": "Cognitive Fitness",
    "n": 4,
    "title": "Memorise something useless",
    "body": "Poems, a card deck, the map of your city. Deliberately non-instrumental, so you cannot rationalise offloading it. It is a bodyweight exercise for encoding.",
    "cadence": "weekly",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "cognitive-fitness",
    "kicker": "Cognitive Fitness",
    "n": 5,
    "title": "Leave the interstitials empty",
    "body": "Walk without audio. Wait in a queue without a screen. Consolidation and original thought both require unfilled time, and unfilled time is now something you have to defend rather than something that happens to you.",
    "cadence": "daily",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 1,
    "title": "Unaided first, then adversarial",
    "body": "Attempt it yourself. Then hand your attempt to the machine and ask it to find everything wrong. This inverts the default and converts the tool from an answer source into a tutor — which is the only configuration where it actually teaches.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 2,
    "title": "Ask for the Socratic mode explicitly",
    "body": "\"Do not give me the answer. Ask me questions until I find it.\" The tool will do this well and will never do it unprompted, because every interface is built to resolve rather than to prolong.",
    "cadence": "daily",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 3,
    "title": "Build things with real users",
    "body": "A project nobody uses teaches you what you already believed. Reality is the only feedback source that is not trying to be agreeable, and agreeableness is the machine's dominant failure mode as a teacher.",
    "cadence": "standing",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 4,
    "title": "Apprentice to a person, not a curriculum",
    "body": "Find someone better than you who will look at your work and tell you what is wrong with it. This single relationship outperforms any course. It is also the hardest thing on this list to arrange, which is why it stays scarce and valuable.",
    "cadence": "structural",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 5,
    "title": "Learn in public, and teach it",
    "body": "Explaining forces the retrieval and exposes the gaps that recognition hides. Publishing does the same with added stakes. The Feynman method survives contact with AI intact — because the constraint was never information access.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "education",
    "kicker": "Learning & Education",
    "n": 6,
    "title": "Space it and interleave it",
    "body": "Return to material after you have begun to forget. Mix problem types instead of drilling one. Both feel worse and work better — the desirable-difficulty finding is one of the most robust in the field.",
    "cadence": "weekly",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "relationships",
    "kicker": "Relationships & Presence",
    "n": 1,
    "title": "Never automate a gesture",
    "body": "The moment a message of care is generated, its meaning is gone whether or not anyone finds out — because the meaning was the cost. Write it badly yourself. Badly and yours beats polished and synthetic, every time.",
    "cadence": "daily",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "relationships",
    "kicker": "Relationships & Presence",
    "n": 2,
    "title": "Keep something you are needed for",
    "body": "Not something you enjoy — something where your absence is felt by a specific person. This is the appetite nobody talks about and the one machines cannot touch.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "relationships",
    "kicker": "Relationships & Presence",
    "n": 3,
    "title": "Pay the travel cost",
    "body": "Show up in person for things that could have been a call. The inefficiency is the message. This gets more valuable, not less, as remote substitutes improve.",
    "cadence": "weekly",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "relationships",
    "kicker": "Relationships & Presence",
    "n": 4,
    "title": "Run the direction test on your tools",
    "body": "For any AI interaction that meets a social need, ask honestly: is this routing me back toward people, or making people feel comparatively exhausting? The answer is usually available if you look for it.",
    "cadence": "periodic",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "relationships",
    "kicker": "Relationships & Presence",
    "n": 5,
    "title": "Become checkable",
    "body": "Build a track record someone can verify and a reputation you would lose by lying. In a world of infinite plausible content, this is not just character — it is the scarce asset.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "work",
    "kicker": "Work & Economy",
    "n": 1,
    "title": "Do a task audit, not a job audit",
    "body": "List what you actually did last week in units of thirty minutes. Mark each task substitute, complement or neutral. Your exposure is the substitute column as a share of your time — a far more honest number than any occupation-level forecast.",
    "cadence": "periodic",
    "rung": 1,
    "inPlaybook": true
  },
  {
    "topic": "work",
    "kicker": "Work & Economy",
    "n": 2,
    "title": "Deliberately grow the complement column",
    "body": "Take on more of what the tools make more valuable: the judgment calls, the client relationship, the accountable decision, the physical execution. Do this before you are forced to.",
    "cadence": "standing",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "work",
    "kicker": "Work & Economy",
    "n": 3,
    "title": "Acquire one non-cognitive capability",
    "body": "Something embodied, licensed or relational. Not as a fallback — as portfolio diversification against a correlated shock to cognitive labour.",
    "cadence": "structural",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "work",
    "kicker": "Work & Economy",
    "n": 4,
    "title": "Move from wage toward stake",
    "body": "Equity, clients, an audience, a practice, ownership of any kind. Even a small stake changes which side of the capital/labour split you sit on.",
    "cadence": "structural",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "work",
    "kicker": "Work & Economy",
    "n": 5,
    "title": "Treat the political question as your question",
    "body": "How the gains are distributed will affect your life more than your skill choices will. Career strategy that treats distribution as somebody else's department is incomplete strategy.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "civilization",
    "kicker": "Civilization",
    "n": 1,
    "title": "Demand contestability where you have any leverage",
    "body": "In your workplace, your professional body, your school board: any consequential automated decision needs a human review route with real power to overturn. Ask who has it. The question alone changes deployments.",
    "cadence": "structural",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "civilization",
    "kicker": "Civilization",
    "n": 2,
    "title": "Support the measurement work",
    "body": "Population-level skill retention and agency are not measured by anyone. What is not measured will not be defended. This is unglamorous, cheap, and the highest-leverage item on the page.",
    "cadence": "standing",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "civilization",
    "kicker": "Civilization",
    "n": 3,
    "title": "Confer status deliberately",
    "body": "You allocate status every day, in what you praise and to whom you defer. Aim some of it at care, maintenance, teaching and repair. Status economies are made of exactly these small acts, which is why they can be changed.",
    "cadence": "daily",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "civilization",
    "kicker": "Civilization",
    "n": 4,
    "title": "Join something deliberative and local",
    "body": "A committee, an assembly, a board, a union. Deliberation is a skill that decays at both individual and civic scale, and the venues where it is practised are closing.",
    "cadence": "standing",
    "rung": 5,
    "inPlaybook": true
  },
  {
    "topic": "civilization",
    "kicker": "Civilization",
    "n": 5,
    "title": "Apply the Illich test before you adopt",
    "body": "Does this tool expand what I can do for myself, or deepen my dependence on a system I cannot inspect? Ask it about every tool, including the ones recommended on this site.",
    "cadence": "periodic",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "steelman",
    "kicker": "Steelman",
    "n": 1,
    "title": "Read it before the others, if you are sceptical",
    "body": "Starting with the opposition is a reasonable way to test whether the rest is worth your time. If the objections seem stronger than the responses, trust that judgment — it is the one the site keeps telling you to use.",
    "cadence": "meta",
    "rung": 0,
    "inPlaybook": false
  },
  {
    "topic": "steelman",
    "kicker": "Steelman",
    "n": 2,
    "title": "Notice which objection you find most comfortable",
    "body": "Objection seven is the comfortable one for people who want to do nothing. Objection three is the comfortable one for people who want to feel critical without changing anything. Comfort is a signal worth interrogating.",
    "cadence": "meta",
    "rung": 0,
    "inPlaybook": false
  },
  {
    "topic": "steelman",
    "kicker": "Steelman",
    "n": 3,
    "title": "Send a better one",
    "body": "The <a href=\"https://github.com/jdmunta/human-in-the-ai-era/issues\">issue tracker</a> is the right venue. Objections that survive get added, with attribution.",
    "cadence": "meta",
    "rung": 0,
    "inPlaybook": false
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 1,
    "title": "Write the failure criterion into the ask",
    "body": "State what a wrong answer would look like, in the request itself. It is the element people skip most and the one that does the most work — it converts a vague wish into something that can be checked.",
    "cadence": "daily",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 2,
    "title": "Show an example instead of an adjective",
    "body": "“Punchy”, “rigorous”, “professional” carry almost no information. One paragraph of the register you actually want carries all of it.",
    "cadence": "daily",
    "rung": 2,
    "inPlaybook": true
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 3,
    "title": "Say “don’t answer yet — ask me questions”",
    "body": "The highest-value instruction available when you are still working something out, and the one no interface will ever suggest, because every interface is built to resolve rather than to prolong.",
    "cadence": "daily",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 4,
    "title": "Make disagreement the easy path",
    "body": "“What is wrong with this?” beats “what do you think?”. Better still, present the work as someone else’s. Agreement you elicited is not evidence of anything.",
    "cadence": "daily",
    "rung": 4,
    "inPlaybook": true
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 5,
    "title": "Generate alternatives before refining any of them",
    "body": "Refinement cannot escape a bad frame. Three different attempts beat one attempt polished three times, and the first draft anchors everything after it.",
    "cadence": "weekly",
    "rung": 3,
    "inPlaybook": true
  },
  {
    "topic": "communication",
    "kicker": "Working With Machines",
    "n": 6,
    "title": "Restate the brief, or start over",
    "body": "Long threads decay toward a generic version of the task. Restating costs seconds; noticing the drift after you have shipped costs more.",
    "cadence": "daily",
    "rung": 2,
    "inPlaybook": true
  }
];

export const practicesFor = (topic: string): Practice[] =>
  PRACTICES.filter((p) => p.topic === topic).sort((a, b) => a.n - b.n);
