"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Drake", "Masters Edition II", "ME2");
  }
}

module.exports = ScreechingDrake;
