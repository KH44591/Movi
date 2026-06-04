// =============================================
// MOVI — drops-data.js
// নতুন drop আসলে এখানে add করো।
// HTML ছুঁতে হবে না।
// =============================================

const MOVI_DROPS = [

  // ── DROP 001 ──────────────────────────────
  {
    id: "drop-001",
    number: "001",
    name: "MOVI SHADOW",
    status: "open",        // "open" | "sold" | "soon"
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

    // প্রতিটা shoe variant — image + color + stock
    shoes: [
      {
        color: "Chalk",
        image: "Images/hero-shoe.png",   // তোমার image path
        stock: 74,
        // background: হালকা/dark/army — stage color বদলায়
        stage: "light",   // "light" | "dark" | "army" | "custom"
        // stage: "custom" হলে নিচে bg_color দাও
        // bg_color: "#1a1a2e"
      },
      {
        color: "Onyx",
        image: "Images/hero-shoe.png",   // আলাদা image থাকলে path দাও
        stock: 68,
        stage: "dark",
      },
      {
        color: "Army",
        image: "Images/hero-shoe.png",
        stock: 58,
        stage: "army",
      },
    ],
  },

  // ── DROP 000 (archived / sold out) ────────
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
        image: "Images/hero-shoe.png",
        stock: 0,
        stage: "dark",
      },
    ],
  },

  // ── DROP 002 (coming soon) ────────────────
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
    shoes: [],   // image নেই এখনো — placeholder দেখাবে
  },

  // ── নতুন drop add করতে এখানে copy করো ──
  // {
  //   id: "drop-003",
  //   number: "003",
  //   name: "MOVI RUNNER",
  //   status: "open",
  //   price: 3999,
  //   pairs_total: 150,
  //   delivery: "3 weeks",
  //   description: "...",
  //   specs: [
  //     { label: "Upper", value: "Mesh" },
  //   ],
  //   shoes: [
  //     { color: "White", image: "Images/runner-white.png", stock: 50, stage: "light" },
  //     { color: "Black", image: "Images/runner-black.png", stock: 50, stage: "dark"  },
  //     { color: "Red",   image: "Images/runner-red.png",   stock: 50, stage: "custom", bg_color: "#1a0005" },
  //   ],
  // },

];

// Stage background map
const STAGE_BACKGROUNDS = {
  light:  "linear-gradient(135deg, #e8e7e2 0%, #d5d4cf 100%)",
  dark:   "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
  army:   "linear-gradient(135deg, #2a2e1a 0%, #1a1d10 100%)",
  red:    "linear-gradient(135deg, #1a0005 0%, #0a0003 100%)",
  navy:   "linear-gradient(135deg, #0d1117 0%, #060a0f 100%)",
  cream:  "linear-gradient(135deg, #f0ebe0 0%, #e5dfd3 100%)",
};
