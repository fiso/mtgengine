"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalBeyond extends Card {
  constructor(game) {
    super(game, "Primal Beyond", "Morningtide", "MOR");
  }
}

module.exports = PrimalBeyond;
