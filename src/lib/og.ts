import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

const FONT_DIR = path.join(process.cwd(), 'src/assets/fonts');
const read = (f: string) => fs.readFileSync(path.join(FONT_DIR, f));

const fonts = [
  { name: 'Fraunces',   data: read('fraunces-600.ttf'),   weight: 600 as const, style: 'normal' as const },
  { name: 'Newsreader', data: read('newsreader-400.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: 'Newsreader', data: read('newsreader-500.ttf'), weight: 500 as const, style: 'normal' as const },
  { name: 'PlexMono',   data: read('plexmono-500.ttf'),   weight: 500 as const, style: 'normal' as const },
];

const PAPER = '#f2eee4';
const INK = '#17150f';
const SOFT = '#55503f';
const FAINT = '#8a8270';
const HUMAN = '#a8391a';
const MACHINE = '#1d5551';
const RULE = '#d8d0be';

export interface CardOpts {
  eyebrow: string;
  title: string;
  blurb: string;
  footRight?: string;
}

/** Share card in the site's own palette: warm paper, ink type, human→machine spine. */
function card({ eyebrow, title, blurb, footRight }: CardOpts) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px', height: '630px', display: 'flex',
        background: PAPER, fontFamily: 'Newsreader',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              width: '14px', height: '630px', display: 'flex',
              backgroundImage: `linear-gradient(180deg, ${HUMAN}, ${MACHINE})`,
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              flex: 1, display: 'flex', flexDirection: 'column',
              padding: '62px 72px 50px 64px', justifyContent: 'space-between',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'PlexMono', fontSize: '22px', letterSpacing: '3.4px',
                    color: HUMAN, display: 'flex',
                  },
                  children: eyebrow.toUpperCase(),
                },
              },
              {
                type: 'div',
                props: {
                  style: { display: 'flex', flexDirection: 'column' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontFamily: 'Fraunces', fontWeight: 600,
                          fontSize: title.length > 34 ? '66px' : '80px',
                          lineHeight: 1.05, letterSpacing: '-2.2px',
                          color: INK, marginBottom: '28px', display: 'flex',
                        },
                        children: title,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '28px', lineHeight: 1.44, color: SOFT,
                          maxWidth: '880px', display: 'flex',
                        },
                        children: blurb,
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderTop: `1px solid ${RULE}`, paddingTop: '24px',
                    fontFamily: 'PlexMono', fontSize: '19px', letterSpacing: '2.4px',
                  },
                  children: [
                    { type: 'div', props: { style: { color: INK, display: 'flex' }, children: 'HUMAN · IN THE AI ERA' } },
                    { type: 'div', props: { style: { color: FAINT, display: 'flex' }, children: (footRight ?? 'HUMANAI.UP.RAILWAY.APP').toUpperCase() } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  } as any;
}

export async function renderCard(opts: CardOpts): Promise<Buffer> {
  const svg = await satori(card(opts), { width: 1200, height: 630, fonts });
  return Buffer.from(
    new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
  );
}
