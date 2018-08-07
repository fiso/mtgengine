"use strict";
const Constants = require ("../../../Constants");
const SoulbrightFlamekinBase = require("../setA25/SoulbrightFlamekin");

class SoulbrightFlamekin extends SoulbrightFlamekinBase {
  constructor (game) {
    super(game, "Soulbright Flamekin", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SoulbrightFlamekin;
