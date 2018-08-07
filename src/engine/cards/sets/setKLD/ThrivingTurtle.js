"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrivingTurtle extends UnimplementedCard {
  constructor (game) {
    super(game, "Thriving Turtle", "Kaladesh", "KLD");
  }
}

module.exports = ThrivingTurtle;
