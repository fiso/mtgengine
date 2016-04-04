"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaultRiders extends Card {
  constructor(game) {
    super(game, "Fault Riders", "Prophecy", "PCY");
  }
}

module.exports = FaultRiders;
