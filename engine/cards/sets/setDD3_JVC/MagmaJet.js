"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaJet extends UnimplementedCard {
  constructor(game) {
    super(game, "Magma Jet", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = MagmaJet;
