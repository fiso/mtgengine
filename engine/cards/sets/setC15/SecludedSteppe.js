"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setARC/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor(game) {
    super(game, "Secluded Steppe", "Commander 2015", "C15");
  }
}

module.exports = SecludedSteppe;
