"use strict";
const Constants = require ("../../../Constants");
const ClawsofWirewoodBase = require("../setVMA/ClawsofWirewood");

class ClawsofWirewood extends ClawsofWirewoodBase {
  constructor (game) {
    super(game, "Claws of Wirewood", "Scourge", "SCG");
  }
}

module.exports = ClawsofWirewood;
