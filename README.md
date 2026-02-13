<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/crying-face_1f622.png" width="80" />
</p>

<h1 align="center">zeroReg</h1>

<p align="center">
  <strong>Regex was a mistake. Just like your ex.</strong>
</p>

<p align="center">
  Write regex without the tears or confusion.<br/>
  A human-readable regex builder for JavaScript & TypeScript.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/zeroReg"><img src="https://img.shields.io/npm/v/zeroReg?style=flat-square&color=000&labelColor=000" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/zeroReg"><img src="https://img.shields.io/npm/dm/zeroReg?style=flat-square&color=000&labelColor=000" alt="npm downloads" /></a>
  <a href="https://github.com/zenweb3/zeroReg-landing/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-000?style=flat-square&labelColor=000" alt="license" /></a>
  <a href="https://bundlephobia.com/package/zeroReg"><img src="https://img.shields.io/bundlephobia/minzip/zeroReg?style=flat-square&color=000&labelColor=000&label=size" alt="bundle size" /></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#the-problem">The Problem</a> •
  <a href="#the-solution">The Solution</a> •
  <a href="#api">API</a> •
  <a href="#patterns">Patterns</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## The Problem

You're asked to validate an email. You write this:

```js
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```

Your coworker asks what it does. You mass tears. You mass confusion. You mass quit.

## The Solution

```js
import { email } from 'zeroReg/patterns'

email.test('hello@world.com') // true

// that's it. that's the whole thing.
```

Or build your own patterns like a normal person:

```js
import { digit, literal, optional } from 'zeroReg'

const phone = optional('+')
  .then(digit(3))
  .then('-')
  .then(digit(3))
  .then('-')
  .then(digit(4))

phone.test('123-456-7890')     // true
phone.test('+123-456-7890')    // true
phone.toRegex()                // /\+?\d{3}-\d{3}-\d{4}/
```

No PhD in hieroglyphics required.

## Installation

```bash
# npm
npm install zeroReg

# pnpm
pnpm add zeroReg

# yarn
yarn add zeroReg

# bun
bun add zeroReg
```

## API

### Core Builders

| Function | Description | Regex |
|----------|-------------|-------|
| `digit(n?)` | Match digits | `\d` or `\d{n}` |
| `word()` | Word characters (a-z, 0-9, _) | `\w+` |
| `letter()` | Letters only | `[a-zA-Z]+` |
| `literal(str)` | Exact match (auto-escaped) | `str` |
| `any()` | Any character | `.` |
| `whitespace()` | Whitespace characters | `\s` |

### Quantifiers

| Function | Description | Regex |
|----------|-------------|-------|
| `.oneOrMore()` | 1 or more | `+` |
| `.zeroOrMore()` | 0 or more | `*` |
| `.optional()` | 0 or 1 | `?` |
| `.times(n)` | Exactly n times | `{n}` |
| `.between(min, max)` | Between min and max | `{min,max}` |

### Groups & Logic

| Function | Description | Regex |
|----------|-------------|-------|
| `capture(pattern, name?)` | Capturing group | `(...)` or `(?<n>...)` |
| `group(pattern)` | Non-capturing group | `(?:...)` |
| `oneOf(...patterns)` | Match any of | `(?:a\|b\|c)` |

### Anchors

| Function | Description | Regex |
|----------|-------------|-------|
| `startOfLine()` | Start anchor | `^` |
| `endOfLine()` | End anchor | `$` |
| `wordBoundary()` | Word boundary | `\b` |

### Chain Methods

Every pattern is chainable:

```js
digit(3)
  .then('-')
  .then(digit(4))
  .then(optional(letter()))
  .toRegex()
```

### Output Methods

| Method | Description |
|--------|-------------|
| `.toRegex()` | Returns native `RegExp` |
| `.test(str)` | Tests string against pattern |
| `.match(str)` | Returns matches |
| `.toString()` | Returns pattern string |

## Patterns

Pre-built patterns for common use cases:

```js
import { email, url, phone, date, ipv4, hex, uuid } from 'zeroReg/patterns'

email.test('test@example.com')           // true
url.test('https://github.com')           // true
phone.test('+1-234-567-8900')            // true
ipv4.test('192.168.1.1')                 // true
uuid.test('550e8400-e29b-41d4-a716-446655440000') // true
```

### Available Patterns

- `email` — Email addresses
- `url` — URLs (http/https)
- `phone` — Phone numbers (international)
- `date` — ISO date format
- `time` — Time (HH:MM:SS)
- `ipv4` — IPv4 addresses
- `ipv6` — IPv6 addresses
- `hex` — Hexadecimal strings
- `uuid` — UUIDs
- `slug` — URL slugs
- `hashtag` — Hashtags
- `mention` — @mentions
- `creditCard` — Credit card numbers
- `ssn` — Social security numbers

## Real World Examples

### Password Validation

```js
import { digit, letter, special, any } from 'zeroReg'

const password = startOfLine()
  .then(lookahead(any().zeroOrMore().then(digit())))     // at least 1 digit
  .then(lookahead(any().zeroOrMore().then(letter())))    // at least 1 letter
  .then(lookahead(any().zeroOrMore().then(special())))   // at least 1 special
  .then(any().between(8, 32))                            // 8-32 chars
  .then(endOfLine())

password.test('MyP@ssw0rd')  // true
password.test('weak')        // false
```

### Extract Data

```js
import { digit, capture } from 'zeroReg'

const datePattern = capture(digit(4), 'year')
  .then('-')
  .then(capture(digit(2), 'month'))
  .then('-')
  .then(capture(digit(2), 'day'))

const match = datePattern.match('2024-03-15')
// { year: '2024', month: '03', day: '15' }
```

### URL Parser

```js
import { capture, oneOf, word, any } from 'zeroReg'

const urlParser = capture(oneOf('http', 'https'), 'protocol')
  .then('://')
  .then(capture(word().oneOrMore(), 'domain'))
  .then(optional(capture(literal('/').then(any().zeroOrMore()), 'path')))
```

## TypeScript

Full TypeScript support out of the box:

```ts
import { digit, literal, type Pattern } from 'zeroReg'

const phone: Pattern = digit(3).then('-').then(digit(4))

// Type-safe named captures
const date = capture(digit(4), 'year')
  .then('-')
  .then(capture(digit(2), 'month'))

type DateMatch = MatchResult<typeof date>
// { year: string; month: string }
```

## Why zeroReg?

| | zeroReg | Raw Regex |
|---|:---:|:---:|
| Readable | ✅ | ❌ |
| Maintainable | ✅ | ❌ |
| Composable | ✅ | ❌ |
| Self-documenting | ✅ | ❌ |
| Makes you mass tears | ❌ | ✅ |

## Performance

zeroReg patterns compile to native `RegExp` objects at build time. Zero runtime overhead once compiled.

```js
const pattern = digit(3).then('-').then(digit(4))

// Compiled once, reused forever
const regex = pattern.toRegex() // Native RegExp
```

## Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) first.

```bash
# Clone the repo
git clone https://github.com/zenweb3/zeroReg.git

# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build
```

## License

MIT © [Zen](https://github.com/zenweb3)

---

<p align="center">
  <sub>Built for developers who value their sanity.</sub>
</p>

<p align="center">
  <a href="https://github.com/zenweb3/zeroReg-landing">⭐ Star us on GitHub</a>
</p>