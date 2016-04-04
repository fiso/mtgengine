"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceBeleren extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace Beleren", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = JaceBeleren;
