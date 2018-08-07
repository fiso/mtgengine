"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodiSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Custodi Squire", "You Make the Cube", "PZ2");
  }
}

module.exports = CustodiSquire;
