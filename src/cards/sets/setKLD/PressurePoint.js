"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PressurePoint extends UnimplementedCard {
  constructor (game) {
    super(game, "Pressure Point", "Kaladesh", "KLD");
  }
}

module.exports = PressurePoint;
