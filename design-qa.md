# Design QA — VLauncher bilingual interface

## Comparison target

- **Source visual truth:** the verified VLauncher Weekly Launch screen captured before the bilingual feature, plus the existing VLauncher design system. No new visual mockup was supplied for the language control.
- **Implementation:** browser-rendered `http://localhost:4173/weekly-launch`, captured at `/Users/kevin/Documents/MyProjects/vlauncher/work/vlauncher-language-final-en.png` (default English) and `/Users/kevin/Documents/MyProjects/vlauncher/work/vlauncher-language-zh.png` (Chinese state).
- **Viewport and state:** desktop/light 1280 CSS-px viewport; browser-content screenshots are 1265 × 712 px at 1× density. English is the default state; Chinese is the switched state.

## Full-view comparison evidence

The shared header now includes a compact textual language control between search and login. It preserves VLauncher’s existing hierarchy in English and keeps the navigation, editorial hero, primary CTA, banners, and key product-directory messaging readable after changing to Chinese.

## Focused comparison evidence

Focused inspection covered the header control, active nav state, English Weekly Launch hero, Chinese Weekly Launch hero, and the Chinese Products directory hero. Browser health reported 0 broken images and `scrollWidth: 1265` at a 1280 px viewport.

## Required fidelity surfaces

- **Fonts and typography:** English remains the default and Chinese headline text uses the existing system fallbacks cleanly, retaining strong visual hierarchy without clipping. Compact Chinese nav labels fit at the desktop header width.
- **Spacing and layout rhythm:** The 38 px language control sits in the original header action rhythm without pushing the main nav or CTA out of view. Desktop `scrollWidth` remains within the viewport.
- **Colors and visual tokens:** The control uses the existing white surface, slate text, muted border, and cobalt hover/active treatment. It remains visually subordinate to the launch CTA.
- **Image quality and asset fidelity:** No new raster or illustrative assets are needed for a textual language control. Existing product marks remain present, visually consistent, and unbroken in both language states.
- **Copy and content:** Navigation and page-level copy switch between English and Chinese across Home, Products, Weekly Launch, Makers, Learn, and the project detail header. Product names and proper nouns remain stable by design.

## Interaction evidence

- The default page state used `lang="en"` and displayed the **中文** switch.
- Selecting **中文** changed the main nav and Weekly Launch hero to Chinese and set `lang="zh-CN"`.
- Navigating to Products while Chinese was selected retained the selection; the Chinese Products heading rendered and the switch displayed **EN**.
- Selecting **EN** restored English navigation, English hero copy, and the **中文** switch.

## Findings

No actionable P0, P1, or P2 findings remain.

## Comparison history

- [P1] Non-image stories retained the image-first two-column grid and left a 162 px blank media track before the text. **Fix:** `maker-story` now receives a `without-image` state and changes to a full-width single-column article. **Post-fix evidence:** each checked non-image story has a 616 px article width and a 616 px content width, with no unused right-side track.

## Open questions

- Product names and maker handles remain in English as proper nouns; all Weekly Launch interface labels, archive metadata, and support counters now localize in Chinese.

## Implementation checklist

- [x] Add a persistent English/Chinese switch, defaulting to English.
- [x] Replace each page header with a shared bilingual navigation control.
- [x] Localize primary navigation and key page-level content across the main routes.
- [x] Verify English default, Chinese state, cross-page persistence, English restoration, page health, production build, and packaging tests.

## Follow-up polish

- [P3] Extend translation coverage to all long-tail metadata, archive records, and fully dynamic product content when a content backend is connected.

## Category localization follow-up

- **Implementation evidence:** browser-rendered Chinese Products directory at `http://localhost:4173/products`; category text and product tags were verified after selecting Chinese.
- **Focused check:** The directory heading rendered as “产品分类”. The first eight category labels rendered as “全部产品”, “SaaS 与工具”, “人工智能与机器学习”, “开发者工具”, “效率工具”, “设计工具”, “营销”, and “数据分析”. Product tags also rendered in Chinese, including “教育”, “移动端与物联网”, “效率工具”, and “健康与生活方式”.
- **Behavior:** Internal English category keys remain unchanged for filtering, while visible labels are localized; no filter regression is introduced by the language switch.
- **Health:** 0 broken images; `scrollWidth: 1265` at a 1280 px viewport.

## Weekly Launch Chinese completeness follow-up

- **Implementation evidence:** browser-rendered Chinese Weekly Launch at `http://localhost:4173/weekly-launch`; active-week, archive, sidebar, calls to action, pagination, footer, ARIA labels, and date ranges are localized.
- **Focused check:** “本周进行中”, “历史周次”, “值得回看的每周发布”, “本周荣誉榜”, “准备发布产品？”, and “阅读发布指南” all rendered in the Chinese state. The active title rendered as “2026 年 8 月 10–16 日 的发布”; a cross-month archive entry rendered as “2026 年 7 月 27 日–8 月 02 日 的发布”.
- **Visual and runtime health:** Full-page visual inspection shows the revised copy remains within the existing two-column layout. Browser console reported 0 errors and `scrollWidth: 1265` at a 1280 px viewport.

## Complete bilingual content follow-up

- **Scope:** All implemented public routes now render Chinese interface labels, descriptions, guides, updates, maker stories, archive metadata, product-detail annotations, and helper messages in the Chinese state. Product names, personal names, handles, domains, monetary values, and established technical or platform names remain unchanged where appropriate.
- **Chinese verification:** Browser checks covered `/`, `/products`, `/weekly-launch`, `/makers`, `/learn`, `/startup/cloud-notes`, and `/startup/firstrevenue`. Homepage product tags, including “笔记” and “开发者工具”, were verified in Chinese; the Weekly Launch countdown renders “4 天 23 小时 18 分”.
- **English verification:** The same seven routes were checked with `lang="en"`; no Chinese characters were found in the rendered page body. The language switch reads “ZH” in English and “英文” in Chinese.
- **Visual and runtime health:** The Chinese homepage was captured at a 1280 px desktop viewport. It retains the intended hierarchy and spacing; `scrollWidth: 1265` and browser console errors: 0.

## Apex logo replacement follow-up

### Comparison target

- **Source visual truth:** selected first image from the latest VLauncher logo exploration, `/Users/kevin/.codex/generated_images/019ff205-1f0b-7781-9fac-9865fc368eb4/exec-f360b06a-3661-4117-ba2f-d731cd290bcd.png`.
- **Implementation asset:** `/Users/kevin/Documents/MyProjects/vlauncher/src/assets/vlauncher-apex-logo.png`, created from the selected source with a chroma-key alpha pass.
- **Implementation screenshot:** browser-rendered `http://localhost:4173/` capture emitted during this QA run; the in-app Browser does not persist an on-disk screenshot path.
- **Viewport and normalization:** 1280 CSS-px desktop viewport, 1× browser density. The implementation capture is 1265 × 712 px of browser content. The source and final asset are 1254 × 1254 px, while the rendered header mark is 36 × 36 CSS px; the compact header crop is intentional and uses equal square scaling.
- **State:** Home route, English default state. Chinese state was also checked by toggling the existing language control and then restored to English.

### Full-view comparison evidence

The first selected direction—a blue, faceted apex/V mark with an upward, sharp technological silhouette—now replaces the prior rounded rocket glyph in the VLauncher header. Its saturated cobalt surface reads cleanly against the white header without the overly soft shading of the previous options. The horizontal header composition, nav spacing, and launch CTA remain unchanged.

### Focused comparison evidence

The selected source asset and the browser-rendered header were opened together for this QA pass. The implementation preserves the source mark’s centered faceted geometry, rounded-square crop, and controlled cobalt tonal range at 36 × 36 px. The detailed project-page header renders the same 36 × 36 px mark; its detail-footer instance uses 31 × 31 px to preserve the smaller footer hierarchy.

### Required fidelity surfaces

- **Fonts and typography:** Brand wordmark, nav type, and existing header hierarchy remain unchanged. The enlarged mark does not force wrapping or crowd the brand descriptor.
- **Spacing and layout rhythm:** The header mark changed from 27 × 27 px to 36 × 36 px (a 33% increase). It fits inside the 76 px header with its original 10 px wordmark gap. The detail footer uses a proportional 31 × 31 px mark.
- **Colors and visual tokens:** The asset uses a focused cobalt/blue faceted palette, avoiding extreme light/dark contrast. It pairs with the existing cobalt CTA rather than introducing a competing accent color.
- **Image quality and asset fidelity:** The PNG is 1254 × 1254 px RGBA with alpha enabled. Chroma-key validation found transparent exterior pixels and no partially transparent fringe pixels; browser checks report 0 broken images. No CSS or inline-SVG approximation substitutes for the selected logo asset.
- **Copy and content:** No app copy changed. The established English-default / Chinese-toggle behavior still works: Chinese header content appeared after toggling, and English was restored before handoff.

### Findings and comparison history

- [P1] Previous header branding used a small rocket glyph that did not express the requested sharper, peak-oriented direction. **Fix:** replaced all VLauncher header and footer glyph instances with the selected first apex-logo asset and increased the primary mark size by 33%. **Post-fix evidence:** home header, home footer, project-detail header, and project-detail footer now resolve to the same local raster asset at the intended dimensions.

No actionable P0, P1, or P2 findings remain.

### Interaction and runtime evidence

- Toggled English → Chinese and confirmed `lang="zh-CN"`, Chinese navigation, and the `英文` switch; toggled back to English before handoff.
- Navigated from Home to `/startup/cloud-notes` and confirmed two local VLauncher asset instances at 36 × 36 and 31 × 31 px respectively.
- Home-page browser health: `scrollWidth: 1265`, `clientWidth: 1265`, and 0 broken images at the desktop viewport.
- Browser logs contain only Vite connection and React DevTools informational messages; no errors.
- `npm run build` and `npm run test:sites` pass. The production build retains the pre-existing bundle-size advisory only.

### Implementation checklist

- [x] Use the selected first faceted-apex logo direction.
- [x] Remove its chroma-key background and validate transparency.
- [x] Replace every VLauncher header and footer logo instance with the local PNG asset.
- [x] Increase the standard mark by at least 30% and keep layout stable.
- [x] Verify rendered asset dimensions, language switching, routing, browser health, build, and packaging tests.

### Follow-up polish

- [P3] If future network delivery becomes a concern, export an optimized WebP or a lower-resolution PNG variant for the small fixed-size brand slot.

## Orbit logo replacement follow-up

### Comparison target

- **Source visual truth:** user-selected orbit-and-arrow logo at `/Users/kevin/.codex/generated_images/019ff205-1f0b-7781-9fac-9865fc368eb4/exec-2758400b-bbb9-4bb4-917b-674301f590fd.png`.
- **Implementation asset:** `/Users/kevin/Documents/MyProjects/vlauncher/src/assets/vlauncher-orbit-logo.png`, with the chroma-key background removed.
- **Implementation screenshot:** browser-rendered `http://localhost:4173/` home capture emitted during this QA run; the in-app Browser does not persist this capture to a local file path.
- **Viewport and state:** 1280 CSS-px desktop viewport, 1× browser density, English default state. The browser content capture measures 1265 × 712 px; the source and final asset measure 1254 × 1254 px; the header mark renders at 36 × 36 CSS px.

### Full-view and focused comparison evidence

The source asset and rendered header were opened together. The implementation uses the selected white launch-arrow, orbital trail, small star, and cobalt rounded-square field—not the former apex mark—at the same 36 px header size. The mark remains clear beside the VLauncher wordmark and does not disturb the navigation or CTA alignment.

### Required fidelity surfaces

- **Fonts and typography:** No text styles changed; the 36 px icon keeps the brand wordmark and descriptor on one line.
- **Spacing and layout rhythm:** Existing 76 px header and 10 px logo-to-wordmark gap remain stable, with no horizontal overflow.
- **Colors and visual tokens:** The selected cobalt mark and light-blue orbit support the existing cobalt CTA and white header.
- **Image quality and asset fidelity:** The final image is 1254 × 1254 RGBA with alpha. The chroma-key pass reported transparent pixels, 2,304 antialiased edge pixels, and no visible magenta spill in the rendered header. It resolves from the local project asset with 0 broken images.
- **Copy and content:** No content changed; English remains the default page state.

### Findings and comparison history

- [P1] The prior faceted-apex asset did not match the newly selected visual direction. **Fix:** swapped the shared `VLauncherLogo` import to the selected orbit-and-arrow PNG, so every existing header and footer instance updates consistently. **Post-fix evidence:** the browser header resolves `vlauncher-orbit-logo.png` at 36 × 36 px.

No actionable P0, P1, or P2 findings remain.

### Interaction and runtime evidence

- Browser health: `scrollWidth: 1265`, `clientWidth: 1265`, and 0 broken images.
- Browser console errors: 0.
- `npm run build` and `npm run test:sites` pass; the production build has only the existing bundle-size advisory.

### Implementation checklist

- [x] Replace the shared VLauncher logo asset with the user-selected orbit mark.
- [x] Remove the chroma-key background and verify alpha.
- [x] Verify the rendered mark, layout health, console health, build, and packaging tests.

## Final result

passed
