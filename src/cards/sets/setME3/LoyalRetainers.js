"use strict";
const Constants = require ("../../../Constants");
const LoyalRetainersBase = require("../setCM1/LoyalRetainers");

class LoyalRetainers extends LoyalRetainersBase {
  constructor (game) {
    super(game, "Loyal Retainers", "Masters Edition III", "ME3");
  }
}

module.exports = LoyalRetainers;
