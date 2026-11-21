# OBIDENCE 2026 — Image & Audio Customization Guide

Congratulations on **OBIDENCE 2026**! This website is styled as a luxury editorial wedding issue magazine (Wine Red & Gold palette).

All text, picture slots, dates, events, and audio configurations are cleanly centralized in:
📁 **[`src/data/weddingData.ts`](file:///c:/Users/HP/Desktop/Tech/obedience/src/data/weddingData.ts)**

---

## 1. How to Replace Photos

You can either:
1. **Use Local Photos (Recommended for personal wedding pictures):**
   - Save your photos into the `/public/images/` folder (e.g. `public/images/hero.jpg`, `public/images/bride.jpg`, `public/images/groom.jpg`).
   - In `src/data/weddingData.ts`, change the `image` or `src` path to `/images/hero.jpg`.

2. **Use Hosted URLs (Google Drive direct link, Cloudinary, Imgur, etc.):**
   - Paste the direct image link into `src/data/weddingData.ts`.

### Picture Checklist & Placement:

| Section | Location in `weddingData.ts` | Recommended Style |
| :--- | :--- | :--- |
| **Hero Cover** | `WEDDING_DATA.couple.heroImage` | Full-portrait/landscape high-res couple photo |
| **Welcome Letter** | `WelcomeLetter.tsx` (or `WEDDING_DATA.couple.heroImage`) | Traditional or engagement formal portrait |
| **Love Story Ch. 1** | `WEDDING_DATA.loveStories[0].image` | First meeting / NYSC memories / portrait |
| **Love Story Ch. 2** | `WEDDING_DATA.loveStories[1].image` | Candid, laughing, "Bubu & Bebe" moment |
| **Love Story Ch. 3** | `WEDDING_DATA.loveStories[2].image` | Proposal / ring moment / "She said yes" |
| **The Bride (Evidence)** | `WEDDING_DATA.couple.bride.image` | Elegant solo portrait of Evidence |
| **The Groom (Obinna)** | `WEDDING_DATA.couple.groom.image` | Sharp, distinguished solo portrait of Obinna |
| **The Covenant** | `WEDDING_DATA.covenant.image` | Holy reverence / prayer / peaceful portrait |
| **Why They Chose (Photo 1)** | `WEDDING_DATA.reasonsToSayYes.photo1.image` | "In step" walking together portrait |
| **Why They Chose (Photo 2)** | `WEDDING_DATA.reasonsToSayYes.photo2.image` | "In love" close romantic portrait |
| **Celebration / Join Us** | `WEDDING_DATA.celebration.seeYouImage` | Warm smiling invitation portrait |
| **Gallery Portraits (6+)** | `WEDDING_DATA.gallery` array | Multiple ceremony & pre-wedding shoots |
| **Inside Back Cover** | `WEDDING_DATA.contact.thankYouImage` | Final "Thank you" closing photo |

---

## 2. How to Replace the Background Music

In **[`src/components/AudioPlayer.tsx`](file:///c:/Users/HP/Desktop/Tech/obedience/src/components/AudioPlayer.tsx#L170)**:
- Place your wedding song `.mp3` into `/public/audio/our-song.mp3`.
- Update the `<audio src="...">` tag:
  ```tsx
  <audio
    ref={audioElementRef}
    loop
    preload="auto"
    src="/audio/our-song.mp3"
  />
  ```
- *Note:* Even without an MP3, the built-in procedural classical acoustic synthesizer automatically plays warm, romantic Pachelbel/Canon chords through the Web Audio API as a fail-proof fallback!

---

## 3. How to Run Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
