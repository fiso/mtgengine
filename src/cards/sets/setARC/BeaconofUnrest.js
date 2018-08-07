"use strict";
const Constants = require ("../../../Constants");
const BeaconofUnrestBase = require("../setC16/BeaconofUnrest");

class BeaconofUnrest extends BeaconofUnrestBase {
  constructor (game) {
    super(game, "Beacon of Unrest", "Archenemy", "ARC");
  }
}

module.exports = BeaconofUnrest;
