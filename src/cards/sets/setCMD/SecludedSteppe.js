"use strict";
const Constants = require ("../../../Constants");
const SecludedSteppeBase = require("../setARC/SecludedSteppe");

class SecludedSteppe extends SecludedSteppeBase {
  constructor (game) {
    super(game, "Secluded Steppe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SecludedSteppe;
