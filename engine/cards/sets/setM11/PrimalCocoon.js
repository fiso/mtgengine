"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalCocoon extends Card {
  constructor(game) {
    super(game, "Primal Cocoon", "Magic 2011", "M11");
  }
}

module.exports = PrimalCocoon;
