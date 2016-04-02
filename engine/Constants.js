const Constants = {
  steps: {
    UNTAP: 0,
    UPKEEP: 1,
    DRAW: 2,
    MAIN1: 3,
    BEGIN_COMBAT: 4,
    DECLARE_ATTACKERS: 5,
    DECLARE_BLOCKERS: 6,
    COMBAT_DAMAGE: 7,
    END_COMBAT: 8,
    MAIN2: 9,
    END: 10,
    CLEANUP: 11
  },

  tapStates: {
    UNTAPPED: "UNTAPPED",
    TAPPED: "TAPPED"
  },

  flipStates: {
    NORMAL: "NORMAL",
    FLIPPED: "FLIPPED"
  },

  transformState: {
    NORMAL: "NORMAL",
    TRANSFORMED: "TRANSFORMED"
  },

  faceState: {
    FACEUP: "FACEUP",
    FACEDOWN: "FACEDOWN"
  },

  zoneTypes: {
    PUBLIC: "PUBLIC",
    HIDDEN: "HIDDEN"
  },

  zoneOwnership: {
    PLAYER: "PLAYER",
    SHARED: "SHARED"
  },

  zoneIdentifiers: {
    BATTLEFIELD: "BATTLEFIELD",
    HAND: "HAND",
    EXILE: "EXILE",
    COMMAND: "COMMAND",
    GRAVEYARD: "GRAVEYARD",
    LIBRARY: "LIBRARY",
    STACK: "STACK"
  },

  cardSuperTypes: {
    LEGENDARY: "LEGENDARY",
    BASIC: "BASIC",
    WORLD: "WORLD",
    SNOW: "SNOW",
    ONGOING: "ONGOING"
  },

  cardTypes: {
    ARTIFACT: "ARTIFACT",
    CREATURE: "CREATURE",
    ENCHANTMENT: "ENCHANTMENT",
    INSTANT: "INSTANT",
    LAND: "LAND",
    PHENOMENON: "PHENOMENON",
    PLANE: "PLANE",
    PLANESWALKER: "PLANESWALKER",
    SCHEME: "SCHEME",
    SORCERY: "SORCERY",
    TRIBAL: "TRIBAL",
    VANGUARD: "VANGUARD"
  },

  colors: {
    WHITE: "WHITE",
    BLUE: "BLUE",
    BLACK: "BLACK",
    RED: "RED",
    GREEN: "GREEN"
  },

  manaTypes: {
    WHITE: "WHITE",
    BLUE: "BLUE",
    BLACK: "BLACK",
    RED: "RED",
    GREEN: "GREEN",
    COLORLESS: "COLORLESS"
  },

  costs: {
    GENERIC: "GENERIC",
    COLORLESS: "COLORLESS",

    WHITE: "WHITE",
    BLUE: "BLUE",
    BLACK: "BLACK",
    RED: "RED",
    GREEN: "GREEN",

    WHITE2: "WHITE2",
    BLUE2: "BLUE2",
    BLACK2: "BLACK2",
    RED2: "RED2",
    GREEN2: "GREEN2",

    PHYREXIAN: "PHYREXIAN",
    WHITEPHYREXIAN: "WHITEPHYREXIAN",
    BLUEPHYREXIAN: "BLUEPHYREXIAN",
    BLACKPHYREXIAN: "BLACKPHYREXIAN",
    REDPHYREXIAN: "REDPHYREXIAN",
    GREENPHYREXIAN: "GREENPHYREXIAN",

    X: "X",
    Y: "Y",
    Z: "Z",
    SNOW: "SNOW",
    TAP: "TAP",
    UNTAP: "UNTAP",

    GOLGARI: "GOLGARI",
    RAKDOS: "RAKDOS",
    SIMIC: "SIMIC",
    SELESNYA: "SELESNYA",
    GRUUL: "GRUUL",
    BOROS: "BOROS",
    DIMIR: "DIMIR",
    IZZET: "IZZET",
    ORZHOV: "ORZHOV",
    AZORIUS: "AZORIUS"
  },

  costTokens: {
    C: "COLORLESS",
    W: "WHITE",
    U: "BLUE",
    B: "BLACK",
    R: "RED",
    G: "GREEN",
    W2: "WHITE2",
    U2: "BLUE2",
    B2: "BLACK2",
    R2: "RED2",
    G2: "GREEN2",
    P: "PHYREXIAN",
    WP: "WHITEPHYREXIAN",
    UP: "BLUEPHYREXIAN",
    BP: "BLACKPHYREXIAN",
    RP: "REDPHYREXIAN",
    GP: "GREENPHYREXIAN",
    X: "X",
    Y: "Y",
    Z: "Z",
    S: "SNOW",
    T: "TAP",
    Q: "UNTAP",
    BG: "GOLGARI",
    BR: "RAKDOS",
    GU: "SIMIC",
    GW: "SELESNYA",
    RG: "GRUUL",
    RW: "BOROS",
    UB: "DIMIR",
    UR: "IZZET",
    WB: "ORZHOV",
    WU: "AZORIUS"
  },

  keywordAbilities: {
    DEATHTOUCH: "DEATHTOUCH",
    DEFENDER: "DEFENDER",
    DOUBLE_STRIKE: "DOUBLE_STRIKE",
    ENCHANT: "ENCHANT",
    EQUIP: "EQUIP",
    FIRST_STRIKE: "FIRST_STRIKE",
    FLASH: "FLASH",
    FLYING: "FLYING",
    HASTE: "HASTE",
    HEXPROOF: "HEXPROOF",
    INDESTRUCTIBLE: "INDESTRUCTIBLE",
    INTIMIDATE: "INTIMIDATE",
    LANDWALK: "LANDWALK",
    LIFELINK: "LIFELINK",
    PROTECTION: "PROTECTION",
    REACH: "REACH",
    SHROUD: "SHROUD",
    TRAMPLE: "TRAMPLE",
    VIGILANCE: "VIGILANCE",

    INFECT: "INFECT"
  }
};

module.exports = Constants;
