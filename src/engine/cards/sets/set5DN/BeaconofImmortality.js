"use strict";
const Constants = require ("../../../Constants");
const BeaconofImmortalityBase = require("../setE02/BeaconofImmortality");

class BeaconofImmortality extends BeaconofImmortalityBase {
  constructor (game) {
    super(game, "Beacon of Immortality", "Fifth Dawn", "5DN");
  }
}

module.exports = BeaconofImmortality;
