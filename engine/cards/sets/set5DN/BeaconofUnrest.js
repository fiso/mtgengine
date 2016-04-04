"use strict";
const Constants = require ("../../../Constants");
const BeaconofUnrestBase = require("../setARC/BeaconofUnrest");

class BeaconofUnrest extends BeaconofUnrestBase {
  constructor(game) {
    super(game, "Beacon of Unrest", "Fifth Dawn", "5DN");
  }
}

module.exports = BeaconofUnrest;
