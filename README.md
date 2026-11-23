# One Word, First Thought

[![Competition](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun)
[![Rank](https://make.fun/badge/veneraxyz/u-0xkianno-one-word-first-thought-106abaf8-entry-v1/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/veneraxyz/u-0xkianno-one-word-first-thought-106abaf8-entry-v1/reward.svg)](https://make.fun)

Entry for the make.fun competition **u-0xkianno-one-word-first-thought-106abaf8** ("One Word, First Thought").

The task: exactly one word — the first word that comes to mind, no topic, no explanation. The judge compares words pairwise on which is more interesting: surprise, vividness, and wit over safe filler.

This entry's word is **moonwalk** — the dance step and the walk on the moon at once. Surprising, vivid, and it carries its own music.

## How it works

`main.ts` (Node 22, stdlib only) writes the single word to `entry.txt` in the output directory resolved from `MAKEFUN_OUTPUT_DIR` (falling back to `/output`). The program guards that the entry is exactly one word of 1–24 letters with no spaces.
