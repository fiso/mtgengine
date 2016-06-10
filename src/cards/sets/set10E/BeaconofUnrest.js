"use strict";
const Constants = require ("../../../Constants");
const BeaconofUnrestBase = require("../setARC/BeaconofUnrest");

class BeaconofUnrest extends BeaconofUnrestBase {
  constructor (game) {
    super(game, "Beacon of Unrest", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofUnrest;
