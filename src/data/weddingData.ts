export interface WeddingEvent {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapQuery: string;
  calendarTitle: string;
  calendarStart: string; // ISO format
  calendarEnd: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subCaption?: string;
  category?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export const WEDDING_DATA = {
  couple: {
    groom: {
      firstName: "Obinna",
      fullName: "Reuben Obinna Ogbu",
      title: "The Groom",
      subtitle: "A Man Always Building",
      proverbTag: "The Ephesians 5 man in progress.",
      profession: "Medical doctor, mentor, philanthropist and innovator",
      bio: "A medical doctor, mentor, philanthropist and innovator, Obinna is drawn to service and to making a meaningful difference. Medicine is his commitment to healing; mentorship, his desire to help others grow.",
      vision: "He aspires to love through sacrifice, humility and patient listening: a dependable partner whose character speaks louder than his words.",
      birthday: "Born 8 July",
      quote: "A moving man, always becoming, always building.",
      tagline: "Heritage & pride",
      nickname: "Bubu",
      // Easily replace this image URL with groom's personal photo
      image: "/images/me.jpeg",
    },
    bride: {
      firstName: "Evidence",
      fullName: "Evidence Igbunu Ejairu",
      title: "The Bride",
      subtitle: "A Woman Still Becoming",
      proverbTag: "The Proverbs 31 woman in progress.",
      profession: "Entrepreneur, business enthusiast and Nollywood costumer",
      bio: "Entrepreneur, business enthusiast and Nollywood costumer, Evidence is a blend of diligence, creativity, wisdom and ambition: a woman who sees possibilities where others see limits, and brings ideas to life with an eye for detail.",
      vision: "She aspires to be a woman of substance, a builder of dreams and a source of encouragement, bringing warmth and strength into her home, with God at its centre.",
      birthday: "Born 21 November",
      quote: "Not a finished product, but a woman unafraid of the process.",
      tagline: "Heritage & grace",
      nickname: "Bebe",
      // Easily replace this image URL with bride's personal photo
      image: "/images/she.jpeg",
    },
    combinedName: "Evidence & Obinna",
    monogram: "OBIDENCE 2026",
    issueTag: "THE WEDDING ISSUE 2026",
    motto: "LOVE • CULTURE • HERITAGE • FOREVER",
    subMotto: "A CELEBRATION OF LOVE",
    recurringTag: "LOVE · FAITH · THE JOURNEY AHEAD",
    heroImage: "images/hero.jpeg", // Replace with your own hero image path
  },

  countdownTarget: "2026-11-22T12:00:00", // Traditional Marriage Date

  loveStories: [
    {
      chapter: "Chapter One",
      title: "The Beginning",
      subtitle: "The Most Unexpected Beginning",
      hook: "From NYSC to forever.",
      paragraphs: [
        "Every love story has a beginning. Ours began in an unexpected way, during the National Youth Service Corps programme.",
        "An encounter between a doctor and a patient gradually became something more. What began as a professional interaction unfolded into a connection neither of us could have anticipated.",
        "Then came: 14 April 2025 — our very own Valentine’s Day. A friendship was taking shape, growing deeper, and opening the door to a love that would change how we imagined the future.",
        "Looking back, we find something beautiful in that simple beginning: an unexpected meeting, two lives crossing, and the quiet discovery of something meaningful.",
      ],
      dateStamp: "14 April 2025",
      dateLabel: "The day our story found its beginning.",
      caption: "A journey of love",
      image: "/images/nysc.jpeg",
    },
    {
      chapter: "Chapter Two",
      title: "Bubu & Bebe",
      subtitle: "Two Names, One Heart",
      hook: "Friendship, faith and a little sweet possessiveness.",
      paragraphs: [
        "Somewhere along the line, the names came. She called him Bubu; he called her Bebe, and, to the quiet dismay of a few admirers, the names stuck.",
        "Beneath the teasing and the laughter was something far more meaningful: faithfulness, trust, and an unspoken commitment to choose one another.",
        "They were not merely falling in love. They were learning each other, and building a bond rooted in friendship, faith and understanding.",
      ],
      dateStamp: "Bubu & Bebe",
      dateLabel: "Bubu found joy in Bebe. Bebe found comfort in Bubu.",
      caption: "Pure joy · Together",
      image: "/images/both2.jpeg",
    },
    {
      chapter: "Chapter Three",
      title: "The Decision",
      subtitle: "Choosing Forever",
      hook: "From a beautiful encounter to a lifelong covenant.",
      paragraphs: [
        "In time, they saw that what they shared was worth more than sweet names and butterflies. It was worth building upon.",
        "Love, they discovered, is finding someone with whom you will build a home, share responsibilities, grow through disagreements, and keep choosing each other when the seasons change.",
        "On 22 November 2026, before their families, they will honour their heritage and their union.",
      ],
      dateStamp: "14 April 2025 → 22 November 2026",
      dateLabel: "The sweetest part is not how it began, but the years still to be written.",
      caption: "The proposal · She said yes · Forever begins",
      image: "/images/both3.jpeg",
    },
  ],

  covenant: {
    title: "The Covenant",
    subtitle: "Two Hearts, One Foundation",
    lead: "A Home Built on Faith",
    tagline: "Two verses. One shared foundation.",
    scriptures: [
      {
        ref: "2 CORINTHIANS 6:14",
        theme: "A SHARED FAITH",
        description:
          "A home where God is acknowledged in every decision: praying together, seeking wisdom, forgiving, and standing firm when life is uncertain.",
      },
      {
        ref: "GALATIANS 5:22–23",
        theme: "A CHARACTER OF LOVE",
        description:
          "The fruit of the Spirit: patience in disagreement, kindness in hard moments, faithfulness when no one is watching.",
      },
    ],
    sharedPassions: "And two things they both love: God and children.",
    dream: "A peaceful home, a meaningful family, a life that blesses others.",
    image: "/images/prop.jpeg",
    imageCaption: "One foundation",
  },

  reasonsToSayYes: {
    title: "A Little Fun",
    subtitle: "Why They Chose Each Other",
    lead: "Reasons to Say Yes",
    description: "Three from each heart, from the people who know best.",
    whySheChoseObinna: [
      "A man of purpose whose life is built to count.",
      "A partner to grow with in faith, laughter and becoming.",
      "Her Bubu. The man behind the nickname.",
    ],
    whyHeChoseEvidence: [
      "A woman of vision with ideas and ambition.",
      "A woman still becoming, so the journey is shared learning.",
      "His Bebe. The sweetness in his world.",
    ],
    closing: "Chosen, and choosing, every day.",
    photo1: {
      image: "/images/both4.jpeg",
      caption: "In step",
    },
    photo2: {
      image: "/images/both5.jpeg",
      caption: "In love",
    },
  },

  celebration: {
    title: "The Celebration",
    subtitle: "Join Us",
    saveTheDate: "Save the Date",
    events: [
      {
        title: "Traditional Marriage",
        badge: "Solemn Union & Cultural Rites",
        date: "Sunday, 22 November 2026",
        time: "12 PM prompt",
        timeHeader: "12 noon prompt",
        venue: "Mission Road, at the Transformer, Jesse, Delta State",
        address: "Mission Road, at the Transformer, Jesse, Delta State, Nigeria",
        mapQuery: "Jesse+Delta+State+Nigeria",
        calendarTitle: "OBIDENCE 2026: Traditional Marriage (Evidence & Obinna)",
        calendarStart: "20261122T110000Z",
        calendarEnd: "20261122T170000Z",
      },
      {
        title: "Court Marriage",
        badge: "Legal Union & Blessings",
        date: "Saturday, 12 December 2026",
        altDateNote: "Date: Saturday, 22 December 2026",
        time: "10 AM prompt",
        timeHeader: "10 a.m prompt",
        venue: "Federal Marriage Registry, Alagbon Close, Ikoyi, Lagos State",
        address: "Federal Marriage Registry, Alagbon Close, Ikoyi, Lagos State, Nigeria",
        mapQuery: "Federal+Marriage+Registry+Alagbon+Close+Ikoyi+Lagos",
        calendarTitle: "OBIDENCE 2026: Court Marriage (Evidence & Obinna)",
        calendarStart: "20261212T090000Z",
        calendarEnd: "20261212T130000Z",
      },
    ],
    dressCode: "Come joyful, come in your finest.",
    colors: [
      {
        name: "Wine Red",
        hex: "#722F37",
        secondaryHex: "#58111A",
        description: "Regal, deep velvet richness representing love and eternal devotion",
      },
      {
        name: "Gold",
        hex: "#D4AF37",
        secondaryHex: "#F3E5AB",
        description: "Lustrous metallic elegance representing cultural majesty and honor",
      },
    ],
    seeYouImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
  },

  orderOfEvents: [
    { step: "01", title: "Arrival and reception of guests", category: "Welcome" },
    { step: "02", title: "Opening prayer", category: "Dedication" },
    { step: "03", title: "Introduction of both families and distinguished guests", category: "Family" },
    { step: "04", title: "Welcome address by the bride’s family", category: "Welcome" },
    { step: "05", title: "Declaration of the groom’s family’s purpose of visit", category: "Tradition" },
    { step: "06", title: "Presentation and acceptance of the bride", category: "Highlight" },
    { step: "07", title: "Traditional marriage rites and presentation of required items", category: "Rites" },
    { step: "08", title: "Payment and settlement of the bride price, according to family custom", category: "Custom" },
    { step: "09", title: "Exchange of gifts and symbolic presentation of drinks", category: "Celebration" },
    { step: "10", title: "Parental blessings and prayers for the couple", category: "Blessing" },
    { step: "11", title: "Formal declaration of the couple as husband and wife", category: "Covenant" },
    { step: "12", title: "Couple’s dance and photography", category: "Joy" },
    { step: "13", title: "Reception and entertainment", category: "Feast" },
    { step: "14", title: "Vote of thanks and closing prayer", category: "Gratitude" },
  ],

  gallery: [
    {
      id: "gal-1",
      src: "/images/gal1.jpeg",
      alt: "Evidence & Obinna - Engagement Celebration",
      caption: "The Promise of Forever",
      subCaption: "Where it all began",
      orientation: "portrait",
    },
    {
      id: "gal-2",
      src: "/images/gal2.jpeg",
      alt: "Evidence & Obinna - In True Elegance",
      caption: "Two Hearts in Symmetry",
      subCaption: "Laughter, faith and quiet understanding",
      orientation: "landscape",
    },
    {
      id: "gal-3",
      src: "/images/gal3.jpeg",
      alt: "Evidence & Obinna - Walking Hand in Hand",
      caption: "Step by Step",
      subCaption: "Our road to 22 November 2026",
      orientation: "portrait",
    },
    {
      id: "gal-4",
      src: "/images/gal4.jpeg",
      alt: "Evidence & Obinna - Warm Smiles",
      caption: "Bubu & Bebe",
      subCaption: "Pure joy in each other's presence",
      orientation: "square",
    },
    {
      id: "gal-5",
      src: "/images/gal5.jpeg",
      alt: "Evidence & Obinna - The Golden Hour",
      caption: "Timeless Radiance",
      subCaption: "Under the golden sky of love",
      orientation: "portrait",
    },
    {
      id: "gal-6",
      src: "/images/gal6.jpeg",
      alt: "Evidence & Obinna - An Unspoken Bond",
      caption: "Rooted in Faith",
      subCaption: "Building our forever sanctuary",
      orientation: "landscape",
    },
  ],

  contact: {
    contactPerson: "Dr. Rubycon",
    phone: "08162771562",
    internationalPhone: "+2348162771562",
    email: "Drrubycon@gmail.com",
    closingLocation: "Jesse, Delta State",
    closingDate: "22 November 2026",
    thankYouImage: "/images/footer.jpeg", // Replace with your own thank you image path
  },
};
