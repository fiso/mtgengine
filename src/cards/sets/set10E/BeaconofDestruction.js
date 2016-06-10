"use strict";
const Constants = require ("../../../Constants");
const BeaconofDestructionBase = require("../set5DN/BeaconofDestruction");

class BeaconofDestruction extends BeaconofDestructionBase {
  constructor (game) {
    super(game, "Beacon of Destruction", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofDestruction;
