"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaultRiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Fault Riders", "Prophecy", "PCY");
  }
}

module.exports = FaultRiders;
