"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setARC/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Vintage Masters", "VMA");
  }
}

module.exports = SecludedSteppe;
