"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrivingGrubs extends UnimplementedCard {
  constructor (game) {
    super(game, "Thriving Grubs", "Kaladesh", "KLD");
  }
}

module.exports = ThrivingGrubs;
