"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurdenofGreed extends UnimplementedCard {
  constructor (game) {
    super(game, "Burden of Greed", "Darksteel", "DST");
  }
}

module.exports = BurdenofGreed;
