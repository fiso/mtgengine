"use strict";
const Constants = require ("../../../Constants");
const AerialPredationBase = require("../setIMA/AerialPredation");

class AerialPredation extends AerialPredationBase {
  constructor (game) {
    super(game, "Aerial Predation", "Return to Ravnica", "RTR");
  }
}

module.exports = AerialPredation;
