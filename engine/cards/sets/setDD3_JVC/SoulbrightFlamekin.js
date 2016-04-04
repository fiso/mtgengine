"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulbrightFlamekin extends Card {
  constructor(game) {
    super(game, "Soulbright Flamekin", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SoulbrightFlamekin;
