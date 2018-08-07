"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightOil extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Oil", "Kaladesh", "KLD");
  }
}

module.exports = MidnightOil;
