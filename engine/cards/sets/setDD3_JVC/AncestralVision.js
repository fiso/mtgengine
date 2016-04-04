"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralVision extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestral Vision", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = AncestralVision;
