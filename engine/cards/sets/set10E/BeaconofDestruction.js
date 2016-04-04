"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeaconofDestructionBase = require("../set5DN/BeaconofDestruction.js");

class BeaconofDestruction extends BeaconofDestructionBase {
  constructor(game) {
    super(game, "Beacon of Destruction", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofDestruction;
