"use strict";
const Constants = require ("../../../Constants");
const SoulbrightFlamekinBase = require("../setA25/SoulbrightFlamekin");

class SoulbrightFlamekin extends SoulbrightFlamekinBase {
  constructor (game) {
    super(game, "Soulbright Flamekin", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = SoulbrightFlamekin;
