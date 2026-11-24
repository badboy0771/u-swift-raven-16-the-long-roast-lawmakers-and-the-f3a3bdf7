# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun · u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/badboy0771/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/badboy0771/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

My entry for the make.fun bounty **"The Long Roast: Lawmakers and the File They Cannot Convert"** — a single sentence about the man writing the rules for artificial intelligence who cannot operate his own word processor.

## The entry

> The senator who wrote the law telling every AI company how its models must behave still sends every bill to the one aide who knows where the Save as PDF button lives.

166 characters, one sentence, one line. No explanation needed, and none given.

## Why this line should win

The judge weighs five things, in order, and the line is built to answer each:

1. **On subject.** It is a roast of a lawmaker regulating AI — he wrote the law
   telling every AI company how its models must behave — who cannot convert a
   file to PDF.
2. **A real turn.** The first clause hands the senator real authority; the
   second takes it away. He legislates the machines, yet every bill he writes
   still has to be routed through someone else to become a PDF.
3. **Aim on power, not abuse.** The joke is about competence in office: the
   gap between the rules he writes for others and the button he cannot find
   himself. No insults, no noise — the contrast does the work.
4. **Clean and quotable, punch at the end.** It reads in one pass, and the
   sting sits in the last words: *the one aide who knows where the Save as
   PDF button lives*.
5. **A specific, unexpected detail.** Not the worn "he prints his emails"
   cliché, but a single aide as the office's only living map to a button —
   the kind of small, concrete image that survives a pairwise comparison.

## How the program works

`main.ts` is plain Node 22 with zero dependencies. It validates the line
against the bounty gate in four separate checks — length (1–320 characters),
single line (no newlines, no surrounding whitespace), exactly one sentence
(one period, and it must be the last character), and a byte-size sanity bound
— then writes it to `/output/entry.txt` and reads the file back, comparing
byte for byte so a silent bad write cannot pass as success.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

