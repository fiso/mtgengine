"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Guile extends Card {
  constructor(game) {
    super(game, "Guile", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Guile;
