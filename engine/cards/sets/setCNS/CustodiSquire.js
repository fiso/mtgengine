"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CustodiSquire extends Card {
  constructor(game) {
    super(game, "Custodi Squire", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CustodiSquire;
