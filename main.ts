// The Long Roast: Lawmakers and the File They Cannot Convert.
//
// A single satirical sentence about the senator who legislates AI while
// depending on one aide to find the Save as PDF button. This program is the
// whole entry: it proves the line fits the bounty gate, writes it to
// /output/entry.txt, then reads the file back so a silent bad write cannot
// pass as a success.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry itself. One sentence, one line, 166 characters. The first half
// builds the senator's authority (he wrote the law that tells every AI
// company how its models must behave); the second half takes it away (every
// bill he writes still has to be routed to the one aide who knows where the
// Save as PDF button lives). The punch lands on the last words.
const ENTRY_LINE =
  "The senator who wrote the law telling every AI company how its models must behave still sends every bill to the one aide who knows where the Save as PDF button lives.";

// The gate from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 320 characters, a single sentence on a single line.
const GATE = {
  minChars: 1,
  maxChars: 320,
  outputPath: "/output/entry.txt",
} as const;

function fail(message: string): never {
  throw new Error(`entry rejected: ${message}`);
}

// Length first, since it is the cheapest check and the one the sealed
// scorer enforces before the judge ever sees the line.
function checkLength(line: string): void {
  if (line.length < GATE.minChars || line.length > GATE.maxChars) {
    fail(`length is ${line.length} characters, must be ${GATE.minChars}-${GATE.maxChars}`);
  }
}

// A single line means exactly that: no newline anywhere, and no whitespace
// the trim would have removed from either end.
function checkSingleLine(line: string): void {
  if (line.trim() !== line) fail("leading or trailing whitespace");
  if (line.includes("\n") || line.includes("\r")) fail("must be one line");
}

// One sentence means one full stop, and it has to be the last character.
// File extensions, abbreviations and decimals would all smuggle in extra
// periods, so the line deliberately contains none of those.
function checkOneSentence(line: string): void {
  const stops = [...line].filter((ch) => ch === ".").length;
  if (stops !== 1) fail(`found ${stops} periods, expected exactly 1`);
  if (!line.endsWith(".")) fail("the single period must end the sentence");
}

// UTF-8 is the gate's encoding; the byte count is a sanity bound so the
// line stays a short single-line string in any encoding.
function checkBytes(line: string): void {
  const bytes = new TextEncoder().encode(line).length;
  if (bytes > 640) fail(`encoded size is ${bytes} bytes, over the 640-byte bound`);
}

function validateEntry(line: string): string {
  checkLength(line);
  checkSingleLine(line);
  checkOneSentence(line);
  checkBytes(line);
  return line;
}

function run(): void {
  const line = validateEntry(ENTRY_LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(GATE.outputPath, line, "utf8");

  // Read the file back and compare byte for byte: the entry only counts if
  // what landed on disk is exactly the line that passed validation.
  const stored = readFileSync(GATE.outputPath, "utf8");
  if (stored !== line) fail("read-back mismatch after writing entry.txt");

  console.log(`wrote ${GATE.outputPath} (${line.length} characters, 1 sentence, 1 line)`);
  console.log(line);
}

run();

