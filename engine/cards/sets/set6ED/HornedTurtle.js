"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedTurtle extends Card {
  constructor(game) {
    super(game, "Horned Turtle", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HornedTurtle;
