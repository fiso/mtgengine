"use strict";
const Constants = require ("../../../Constants");
const VanishintoMemoryBase = require("../setMM3/VanishintoMemory");

class VanishintoMemory extends VanishintoMemoryBase {
  constructor (game) {
    super(game, "Vanish into Memory", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VanishintoMemory;
