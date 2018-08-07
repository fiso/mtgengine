"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Silver Drake", "Planeshift", "PLS");
  }
}

module.exports = SilverDrake;
