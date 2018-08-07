"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower Drake", "Return to Ravnica", "RTR");
  }
}

module.exports = TowerDrake;
