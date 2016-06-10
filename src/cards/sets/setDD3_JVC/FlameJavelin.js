"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameJavelin extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Javelin", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FlameJavelin;
