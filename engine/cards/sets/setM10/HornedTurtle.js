"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornedTurtleBase = require("../set6ED/HornedTurtle.js");

class HornedTurtle extends HornedTurtleBase {
  constructor(game) {
    super(game, "Horned Turtle", "Magic 2010", "M10");
  }
}

module.exports = HornedTurtle;
