"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulbrightFlamekin extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulbright Flamekin", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SoulbrightFlamekin;
