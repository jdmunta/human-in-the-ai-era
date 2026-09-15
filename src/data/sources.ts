export interface Source {
  /** Citation, may contain <em> for titles. */
  cite: string;
  /** Essays that lean on it. Empty means site-wide background. */
  topics: string[];
  /** Stated where a figure is famous but contested. */
  caveat?: string;
  group: string;
}

export const SOURCES: Source[] = [
  // Automation & judgment
  { group: 'Automation & judgment', topics: ['judgment'],
    cite: 'Bainbridge, L. (1983). “Ironies of Automation.” <em>Automatica</em> 19(6).' },
  { group: 'Automation & judgment', topics: ['judgment'],
    cite: 'BEA France (2012). <em>Final Report on the accident to Airbus A330-203, flight AF447</em>.' },
  { group: 'Automation & judgment', topics: ['judgment'],
    cite: 'Parasuraman, R. &amp; Riley, V. (1997). “Humans and Automation: Use, Misuse, Disuse, Abuse.” <em>Human Factors</em> 39(2).' },
  { group: 'Automation & judgment', topics: ['judgment'],
    cite: 'Skitka, L., Mosier, K. &amp; Burdick, M. (1999). “Does automation bias decision-making?” <em>IJHCS</em> 51.' },
  { group: 'Automation & judgment', topics: ['judgment', 'education'],
    cite: 'Dell’Acqua, F. et al. (2023). “Navigating the Jagged Technological Frontier.” Harvard Business School WP 24-013.' },
  { group: 'Automation & judgment', topics: ['judgment'],
    cite: 'Aristotle, <em>Nicomachean Ethics</em> — phronesis, practical wisdom developed by habituation rather than rule.' },

  // Responsibility
  { group: 'Responsibility', topics: ['responsibility'],
    cite: 'Matthias, A. (2004). “The responsibility gap.” <em>Ethics and Information Technology</em> 6(3).' },
  { group: 'Responsibility', topics: ['responsibility'],
    cite: 'Elish, M. C. (2019). “Moral Crumple Zones.” <em>Engaging Science, Technology, and Society</em> 5.' },

  // Meaning & purpose
  { group: 'Meaning & purpose', topics: ['meaning', 'civilization'],
    cite: 'Jahoda, M., Lazarsfeld, P. &amp; Zeisel, H. (1933). <em>Marienthal: The Sociography of an Unemployed Community</em>.' },
  { group: 'Meaning & purpose', topics: ['meaning'],
    cite: 'Frankl, V. (1946). <em>Man’s Search for Meaning</em>.' },
  { group: 'Meaning & purpose', topics: ['meaning'],
    cite: 'Weber, M. (1905). <em>The Protestant Ethic and the Spirit of Capitalism</em>.' },
  { group: 'Meaning & purpose', topics: ['meaning'],
    cite: 'Keynes, J. M. (1930). “Economic Possibilities for our Grandchildren.”' },
  { group: 'Meaning & purpose', topics: ['purpose'],
    cite: 'Deci, E. &amp; Ryan, R. — self-determination theory (autonomy, competence, relatedness).' },

  // Curiosity & learning
  { group: 'Curiosity & learning', topics: ['curiosity'],
    cite: 'Loewenstein, G. (1994). “The Psychology of Curiosity.” <em>Psychological Bulletin</em> 116(1).' },
  { group: 'Curiosity & learning', topics: ['cognitive-fitness', 'education'],
    cite: 'Bjork, R. A. &amp; Bjork, E. L. — desirable difficulties; spacing, interleaving, retrieval practice.' },
  { group: 'Curiosity & learning', topics: ['curiosity', 'education'],
    cite: 'Roediger, H. &amp; Karpicke, J. (2006). “Test-Enhanced Learning.” <em>Psychological Science</em> 17(3).' },
  { group: 'Curiosity & learning', topics: ['education'],
    cite: 'Bloom, B. (1984). “The 2 Sigma Problem.” <em>Educational Researcher</em> 13(6).',
    caveat: 'Magnitude widely disputed; direction is not.' },
  { group: 'Curiosity & learning', topics: ['education'],
    cite: 'Caplan, B. (2018). <em>The Case Against Education</em>.' },

  // Cognition & offloading
  { group: 'Cognition & offloading', topics: ['cognitive-fitness'],
    cite: 'Clark, A. &amp; Chalmers, D. (1998). “The Extended Mind.” <em>Analysis</em> 58(1).' },
  { group: 'Cognition & offloading', topics: ['cognitive-fitness'],
    cite: 'Sparrow, B., Liu, J. &amp; Wegner, D. (2011). “Google Effects on Memory.” <em>Science</em> 333.' },
  { group: 'Cognition & offloading', topics: ['cognitive-fitness'],
    cite: 'Risko, E. &amp; Gilbert, S. (2016). “Cognitive Offloading.” <em>Trends in Cognitive Sciences</em> 20(9).' },
  { group: 'Cognition & offloading', topics: ['cognitive-fitness'],
    cite: 'Plato, <em>Phaedrus</em> — the complaint against writing.' },

  // Work & economy
  { group: 'Work & economy', topics: ['work'],
    cite: 'Autor, D. (2015). “Why Are There Still So Many Jobs?” <em>Journal of Economic Perspectives</em> 29(3).' },
  { group: 'Work & economy', topics: ['work'],
    cite: 'Acemoglu, D. &amp; Restrepo, P. — the task framework; displacement vs. reinstatement effects.' },
  { group: 'Work & economy', topics: ['work'],
    cite: 'Bessen, J. (2015). <em>Learning by Doing</em> — the ATM and bank teller case.' },

  // Control & harm
  { group: 'Control & harm', topics: ['override'],
    cite: 'Santoni de Sio, F. &amp; van den Hoven, J. (2018). “Meaningful Human Control over Autonomous Systems.” <em>Frontiers in Robotics and AI</em> 5.' },
  { group: 'Control & harm', topics: ['override'],
    cite: 'Dietvorst, B., Simmons, J. &amp; Massey, C. (2015). “Algorithm Aversion.” <em>Journal of Experimental Psychology: General</em> 144(1).' },
  { group: 'Control & harm', topics: ['override', 'responsibility'],
    cite: 'Reason, J. (1990). <em>Human Error</em> — defence in depth and the Swiss cheese model of accident causation.' },
  { group: 'Control & harm', topics: ['override'],
    cite: 'EU AI Act, Article 14 (human oversight) — and the standing critique that a review requirement is satisfiable without being met.' },

  // Titles & pay
  { group: 'Titles & pay', topics: ['titles'],
    cite: 'Hirsch, F. (1976). <em>Social Limits to Growth</em> — positional goods, and why growth cannot satisfy demand for rank.' },
  { group: 'Titles & pay', topics: ['titles', 'work'],
    cite: 'Coase, R. (1937). “The Nature of the Firm” — why organisations exist at all, and what a coordination slot is for.' },

  // Civilization
  { group: 'Civilization', topics: ['civilization'],
    cite: 'Sen, A. (1999). <em>Development as Freedom</em>; Nussbaum, M. (2011). <em>Creating Capabilities</em>.' },
  { group: 'Civilization', topics: ['civilization'],
    cite: 'Illich, I. (1973). <em>Tools for Conviviality</em>.' },
  { group: 'Civilization', topics: ['civilization'],
    cite: 'Kuznets, S. (1934). US Congress national income report — the original warning about GDP as a welfare measure.' },
];

export const sourcesFor = (topic: string): Source[] =>
  SOURCES.filter((s) => s.topics.includes(topic));

export const SOURCE_GROUPS = [...new Set(SOURCES.map((s) => s.group))];
