"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeaconofImmortalityBase = require("../set5DN/BeaconofImmortality.js");

class BeaconofImmortality extends BeaconofImmortalityBase {
  constructor(game) {
    super(game, "Beacon of Immortality", "Tenth Edition", "10E");
  }
}

module.exports = BeaconofImmortality;
