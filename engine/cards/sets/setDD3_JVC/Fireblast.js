"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fireblast extends Card {
  constructor(game) {
    super(game, "Fireblast", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Fireblast;
