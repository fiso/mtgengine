"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Tower Drake", "Invasion", "INV");
  }
}

module.exports = TowerDrake;
