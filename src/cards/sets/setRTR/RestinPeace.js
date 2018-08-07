"use strict";
const Constants = require ("../../../Constants");
const RestinPeaceBase = require("../setA25/RestinPeace");

class RestinPeace extends RestinPeaceBase {
  constructor (game) {
    super(game, "Rest in Peace", "Return to Ravnica", "RTR");
  }
}

module.exports = RestinPeace;
