"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommonBond extends Card {
  constructor(game) {
    super(game, "Common Bond", "Return to Ravnica", "RTR");
  }
}

module.exports = CommonBond;
