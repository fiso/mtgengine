"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConeofFlame extends UnimplementedCard {
  constructor(game) {
    super(game, "Cone of Flame", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ConeofFlame;
