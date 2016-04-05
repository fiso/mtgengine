"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedTurtle extends UnimplementedCard {
  constructor(game) {
    super(game, "Horned Turtle", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HornedTurtle;
