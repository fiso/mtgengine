"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaJet extends Card {
  constructor(game) {
    super(game, "Magma Jet", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = MagmaJet;
