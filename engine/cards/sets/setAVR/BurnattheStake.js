"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurnattheStake extends Card {
  constructor(game) {
    super(game, "Burn at the Stake", "Avacyn Restored", "AVR");
  }
}

module.exports = BurnattheStake;
