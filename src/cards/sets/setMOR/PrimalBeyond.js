"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalBeyond extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Beyond", "Morningtide", "MOR");
  }
}

module.exports = PrimalBeyond;
