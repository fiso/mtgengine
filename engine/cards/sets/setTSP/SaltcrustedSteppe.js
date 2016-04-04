"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaltcrustedSteppeBase = require("../setC13/SaltcrustedSteppe.js");

class SaltcrustedSteppe extends SaltcrustedSteppeBase {
  constructor(game) {
    super(game, "Saltcrusted Steppe", "Time Spiral", "TSP");
  }
}

module.exports = SaltcrustedSteppe;
