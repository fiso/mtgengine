"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconofUnrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Beacon of Unrest", "Archenemy", "ARC");
  }
}

module.exports = BeaconofUnrest;
