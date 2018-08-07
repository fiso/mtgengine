"use strict";
const Constants = require ("../../../Constants");
const SaltcrustedSteppeBase = require("../setC17/SaltcrustedSteppe");

class SaltcrustedSteppe extends SaltcrustedSteppeBase {
  constructor (game) {
    super(game, "Saltcrusted Steppe", "Commander 2013", "C13");
  }
}

module.exports = SaltcrustedSteppe;
