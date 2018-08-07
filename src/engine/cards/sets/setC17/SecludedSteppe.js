"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setC18/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Commander 2017", "C17");
  }
}

module.exports = SecludedSteppe;
