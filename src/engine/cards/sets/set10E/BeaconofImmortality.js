"use strict";
const Constants = require ("../../../Constants");
const BeaconofImmortalityBase = require("../setE02/BeaconofImmortality");

class BeaconofImmortality extends BeaconofImmortalityBase {
  constructor (game) {
    super(game, "Beacon of Immortality", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofImmortality;
