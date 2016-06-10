"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalCocoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Cocoon", "Magic 2011", "M11");
  }
}

module.exports = PrimalCocoon;
