"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeaconHawk extends Card {
  constructor(game) {
    super(game, "Beacon Hawk", "Dissension", "DIS");
  }
}

module.exports = BeaconHawk;
