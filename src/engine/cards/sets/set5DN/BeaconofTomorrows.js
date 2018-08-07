"use strict";
const Constants = require ("../../../Constants");
const BeaconofTomorrowsBase = require("../setDDS/BeaconofTomorrows");

class BeaconofTomorrows extends BeaconofTomorrowsBase {
  constructor (game) {
    super(game, "Beacon of Tomorrows", "Fifth Dawn", "5DN");
  }
}

module.exports = BeaconofTomorrows;
