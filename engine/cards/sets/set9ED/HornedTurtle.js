"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornedTurtleBase = require("../set6ED/HornedTurtle.js");

class HornedTurtle extends HornedTurtleBase {
  constructor(game) {
    super(game, "Horned Turtle", "Ninth Edition", "9ED");
  }
}

module.exports = HornedTurtle;
