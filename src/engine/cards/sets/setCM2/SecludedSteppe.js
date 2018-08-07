"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setC18/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SecludedSteppe;
