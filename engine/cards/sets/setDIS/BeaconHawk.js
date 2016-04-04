"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconHawk extends UnimplementedCard {
  constructor(game) {
    super(game, "Beacon Hawk", "Dissension", "DIS");
  }
}

module.exports = BeaconHawk;
