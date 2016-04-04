"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PendrellDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Pendrell Drake", "Urza's Saga", "USG");
  }
}

module.exports = PendrellDrake;
