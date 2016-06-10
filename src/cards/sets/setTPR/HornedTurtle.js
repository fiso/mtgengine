"use strict";
const Constants = require ("../../../Constants");
const HornedTurtleBase = require("../set6ED/HornedTurtle");

class HornedTurtle extends HornedTurtleBase {
  constructor (game) {
    super(game, "Horned Turtle", "Tempest Remastered", "TPR");
  }
}

module.exports = HornedTurtle;
