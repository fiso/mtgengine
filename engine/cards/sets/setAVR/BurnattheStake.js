"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurnattheStake extends UnimplementedCard {
  constructor(game) {
    super(game, "Burn at the Stake", "Avacyn Restored", "AVR");
  }
}

module.exports = BurnattheStake;
