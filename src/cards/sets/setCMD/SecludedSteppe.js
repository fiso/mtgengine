"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setC18/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Commander 2011", "CMD");
  }
}

module.exports = SecludedSteppe;
