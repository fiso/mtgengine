"use strict";
const Constants = require ("../../../Constants");
const BloodswornStewardBase = require("../setC17/BloodswornSteward");

class BloodswornSteward extends BloodswornStewardBase {
  constructor (game) {
    super(game, "Bloodsworn Steward", "You Make the Cube", "PZ2");
  }
}

module.exports = BloodswornSteward;
