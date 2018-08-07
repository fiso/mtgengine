"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarnamRenegade extends UnimplementedCard {
  constructor (game) {
    super(game, "Narnam Renegade", "Aether Revolt", "AER");
  }
}

module.exports = NarnamRenegade;
