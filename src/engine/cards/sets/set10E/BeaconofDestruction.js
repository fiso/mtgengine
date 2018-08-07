"use strict";
const Constants = require ("../../../Constants");
const BeaconofDestructionBase = require("../setDDS/BeaconofDestruction");

class BeaconofDestruction extends BeaconofDestructionBase {
  constructor (game) {
    super(game, "Beacon of Destruction", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofDestruction;
