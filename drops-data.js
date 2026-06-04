// =============================================
// MOVI — drops-data.js
// শুধু এই file এডিট করো।
// =============================================

const MOVI_DROPS = [

  {
    id: "drop-001",
    number: "001",
    name: "MOVI SHADOW",
    status: "open",
    price: 3499,
    pairs_total: 200,
    delivery: "4 weeks",
    description: "Built for the ones who move before others think. Vulcanized sole. Heat-pressed upper. Hand-finished edge tape. Every pair numbered.",
    specs: [
      { label: "Upper",    value: "Heat-pressed canvas" },
      { label: "Sole",     value: "Vulcanized rubber"   },
      { label: "Finish",   value: "Hand-edged tape"     },
      { label: "Numbered", value: "Each pair unique"    },
    ],
    shoes: [
      {
        color: "Chalk",
        stock: 74,
        stage: "light",
        // ── Views: প্রতিটা angle এর image ──
        // label: customer যা দেখবে
        // image: তোমার GitHub Images/ folder এর path
        views: [
          { label: "Side",   image: "https://github.com/KH44591/Movi/blob/main/Images/hero-shoe%201.png" },
          { label: "Front",  image: "Images/hero-shoe.png" }, // আলাদা image দাও
          { label: "Back",   image: "Images/hero-shoe.png" },
          { label: "Top",    image: "Images/hero-shoe.png" },
          { label: "Detail", image: "Images/hero-shoe.png" },
        ],
      },
      {
        color: "Onyx",
        stock: 68,
        stage: "dark",
        views: [
          { label: "Side",   image: "Images/hero-shoe.png" },
          { label: "Front",  image: "Images/hero-shoe.png" },
          { label: "Back",   image: "Images/hero-shoe.png" },
          
        ],
      },
      {
        color: "Army",
        stock: 58,
        stage: "army",
        views: [
          { label: "Side",   image: "Images/hero-shoe.png" },
          { label: "Front",  image: "Images/hero-shoe.png" },
        ],
      },
    ],
  },

  {
    id: "drop-000",
    number: "000",
    name: "MOVI PROTO",
    status: "sold",
    price: 2999,
    pairs_total: 50,
    delivery: "Delivered",
    description: "The first 50. The prototype run. Never coming back.",
    specs: [],
    shoes: [
      {
        color: "Black",
        stock: 0,
        stage: "dark",
        views: [
          { label: "Side", image: "Images/hero-shoe.png" },
        ],
      },
    ],
  },

  {
    id: "drop-002",
    number: "002",
    name: "???",
    status: "soon",
    price: null,
    pairs_total: null,
    delivery: "TBA",
    description: "Something is coming. Details drop when it's ready.",
    specs: [],
    shoes: [],
  },

];

// Stage background map — stage: "custom" হলে bg_color দাও
const STAGE_BACKGROUNDS = {
  light:  "linear-gradient(135deg, #e8e7e2 0%, #d5d4cf 100%)",
  dark:   "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
  army:   "linear-gradient(135deg, #2a2e1a 0%, #1a1d10 100%)",
  red:    "linear-gradient(135deg, #1a0005 0%, #0a0003 100%)",
  navy:   "linear-gradient(135deg, #0d1117 0%, #060a0f 100%)",
  cream:  "linear-gradient(135deg, #f0ebe0 0%, #e5dfd3 100%)",
};
