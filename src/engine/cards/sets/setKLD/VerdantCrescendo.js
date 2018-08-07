"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantCrescendo extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Crescendo", "Kaladesh", "KLD");
  }
}

module.exports = VerdantCrescendo;
