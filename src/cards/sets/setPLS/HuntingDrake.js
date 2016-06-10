"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Drake", "Planeshift", "PLS");
  }
}

module.exports = HuntingDrake;
