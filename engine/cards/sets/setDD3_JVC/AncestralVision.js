"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestralVision extends Card {
  constructor(game) {
    super(game, "Ancestral Vision", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = AncestralVision;
