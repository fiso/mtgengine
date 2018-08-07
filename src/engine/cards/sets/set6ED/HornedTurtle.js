"use strict";
const Constants = require ("../../../Constants");
const HornedTurtleBase = require("../setTPR/HornedTurtle");

class HornedTurtle extends HornedTurtleBase {
  constructor (game) {
    super(game, "Horned Turtle", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HornedTurtle;
