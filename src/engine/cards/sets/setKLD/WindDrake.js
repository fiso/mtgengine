"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Drake", "Kaladesh", "KLD");
  }
}

module.exports = WindDrake;
