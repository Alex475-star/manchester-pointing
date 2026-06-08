# ProPoint Masonry — Design Brainstorm

## Response 1
<response>
<text>
**Design Movement:** Industrial Brutalism meets Craft Heritage

**Core Principles:**
- Raw materiality: textures that evoke stone, mortar, and aged brick
- Asymmetric editorial layouts with heavy typographic anchors
- Honest, no-frills communication — strength over decoration
- Contrast between rough textures and precise, clean type

**Color Philosophy:**
- Deep charcoal (#1C1A18) as the dominant ground — evoking soot and shadow
- Warm amber/ochre (#C8882A) as the accent — the colour of fresh mortar and sand
- Off-white (#F2EDE6) for readable body text — aged paper, not clinical white
- Muted brick red (#8B3A2A) as a tertiary accent for urgency/CTA

**Layout Paradigm:**
- Diagonal section dividers (clip-path polygon) to suggest movement and construction angles
- Full-bleed hero with a large typographic lockup offset to the left
- Staggered card grids that break the horizontal baseline
- Sticky sidebar navigation on desktop

**Signature Elements:**
- Mortar-texture SVG noise overlay on hero sections
- Thick left-border rule (4px amber) on section headings
- Large numerals (01, 02, 03) as section markers in the background

**Interaction Philosophy:**
- Hover states reveal amber underlines on links
- Cards lift with a subtle 3D tilt on hover (perspective transform)
- Scroll-triggered fade-and-slide-up for content blocks

**Animation:**
- Entrance: translateY(24px) + opacity 0 → 1, 350ms ease-out
- Card hover: scale(1.02) + box-shadow deepens, 180ms
- CTA button: background fill sweeps left-to-right on hover

**Typography System:**
- Display: "Barlow Condensed" Bold 700 — industrial, compressed authority
- Body: "Source Serif 4" Regular — readable, craft-heritage warmth
- Mono accent: "JetBrains Mono" for measurements/specs
</text>
<probability>0.08</probability>
</response>

## Response 2
<response>
<text>
**Design Movement:** Swiss International Style + Construction Precision

**Core Principles:**
- Grid discipline: every element snaps to an underlying 8pt modular grid
- Typographic hierarchy does all the heavy lifting — minimal imagery
- High contrast black/white with a single vivid accent
- Information architecture mirrors the methodical nature of masonry work

**Color Philosophy:**
- Pure white (#FFFFFF) background — clinical precision
- Near-black (#111111) for primary text and structural elements
- Safety orange (#E85D04) as the sole accent — construction sites, high-visibility
- Light grey (#F5F5F5) for alternate section backgrounds

**Layout Paradigm:**
- Strict column grid (12-col) with deliberate column-spanning for emphasis
- Hero: massive left-aligned headline spanning 8 columns, stats in remaining 4
- Services section: alternating text-left / image-right rows
- No decorative elements — only functional geometry

**Signature Elements:**
- Thick horizontal rules separating sections
- Oversized section numbers in outline/stroke style
- Tight letter-spacing on all uppercase labels

**Interaction Philosophy:**
- Minimal hover states — only colour shifts, no transforms
- Form fields with animated label-float behaviour
- Scroll progress indicator at top of page

**Animation:**
- Restrained: only opacity transitions, 200ms
- No parallax or movement — respects the grid's static authority

**Typography System:**
- Display: "Bebas Neue" — bold, condensed, industrial
- Body: "DM Sans" — geometric, neutral, highly legible
</text>
<probability>0.06</probability>
</response>

## Response 3 ← SELECTED
<response>
<text>
**Design Movement:** Rugged Craftsman — warm, textured, trustworthy

**Core Principles:**
- Warmth and solidity: earthy tones that feel like the materials themselves
- Asymmetric but balanced — hero content offset, with a large image counterweight
- Generous whitespace punctuated by rich, full-bleed photo sections
- Typography that feels hand-set but is perfectly legible

**Color Philosophy:**
- Warm cream (#F7F3EE) as the base — aged paper, natural stone
- Deep slate (#2C3E35) as the primary dark — mossy stone, trustworthy
- Terracotta (#C1622F) as the accent — brick, warmth, energy
- Soft sand (#D4B896) as a secondary tint for card backgrounds

**Layout Paradigm:**
- Offset hero: headline and CTA on left 55%, hero image bleeds off the right edge
- Services in a 3-column asymmetric grid (1 wide + 2 narrow)
- Gallery section: masonry-style image grid (CSS columns)
- Testimonials: horizontal scroll on mobile, 2-col on desktop

**Signature Elements:**
- Thin terracotta horizontal rules above section headings
- Rough-edge SVG dividers between sections (organic, not geometric)
- Photo cards with a slight warm sepia overlay on hover

**Interaction Philosophy:**
- Hover on service cards: terracotta border appears + subtle lift
- CTA buttons: solid terracotta fill, white text, slight scale on active
- Navigation: underline slides in from left on hover

**Animation:**
- Hero text: staggered word-by-word fade-up, 400ms total
- Section entrance: translateY(32px) → 0 + opacity, 450ms ease-out, triggered at 80% viewport
- Gallery images: scale(1.04) on hover with sepia overlay fade

**Typography System:**
- Display: "Playfair Display" Bold — editorial gravitas, heritage feel
- Body: "Lato" Regular/Light — clean, approachable, highly readable
- Labels/Caps: "Lato" 700 uppercase with wide letter-spacing
</text>
<probability>0.09</probability>
</response>

## Chosen Design: Response 3 — Rugged Craftsman
