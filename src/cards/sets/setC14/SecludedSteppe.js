"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setARC/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Commander 2014", "C14");
  }
}

module.exports = SecludedSteppe;
