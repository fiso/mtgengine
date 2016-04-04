"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Daze extends Card {
  constructor(game) {
    super(game, "Daze", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Daze;
