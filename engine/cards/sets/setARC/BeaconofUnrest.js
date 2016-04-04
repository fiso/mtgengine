"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeaconofUnrest extends Card {
  constructor(game) {
    super(game, "Beacon of Unrest", "Archenemy", "ARC");
  }
}

module.exports = BeaconofUnrest;
