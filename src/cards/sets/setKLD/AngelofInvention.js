"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofInvention extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Invention", "Kaladesh", "KLD");
  }
}

module.exports = AngelofInvention;
