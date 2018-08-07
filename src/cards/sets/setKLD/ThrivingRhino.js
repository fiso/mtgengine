"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrivingRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Thriving Rhino", "Kaladesh", "KLD");
  }
}

module.exports = ThrivingRhino;
