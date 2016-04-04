"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameJavelin extends Card {
  constructor(game) {
    super(game, "Flame Javelin", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FlameJavelin;
