"use strict";
const Constants = require ("../../../Constants");
const SaltcrustedSteppeBase = require("../setC17/SaltcrustedSteppe");

class SaltcrustedSteppe extends SaltcrustedSteppeBase {
  constructor (game) {
    super(game, "Saltcrusted Steppe", "Time Spiral", "TSP");
  }
}

module.exports = SaltcrustedSteppe;
