"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Condescend extends Card {
  constructor(game) {
    super(game, "Condescend", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Condescend;
