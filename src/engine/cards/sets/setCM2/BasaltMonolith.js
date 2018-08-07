"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasaltMonolith extends UnimplementedCard {
  constructor (game) {
    super(game, "Basalt Monolith", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BasaltMonolith;
