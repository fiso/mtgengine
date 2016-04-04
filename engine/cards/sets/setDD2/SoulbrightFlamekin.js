"use strict";
const Constants = require ("../../../Constants");
const SoulbrightFlamekinBase = require("../setDD3_JVC/SoulbrightFlamekin");

class SoulbrightFlamekin extends SoulbrightFlamekinBase {
  constructor(game) {
    super(game, "Soulbright Flamekin", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SoulbrightFlamekin;
