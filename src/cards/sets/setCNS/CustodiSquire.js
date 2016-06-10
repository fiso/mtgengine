"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodiSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Custodi Squire", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CustodiSquire;
