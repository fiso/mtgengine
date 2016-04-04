"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantTurtle extends Card {
  constructor(game) {
    super(game, "Giant Turtle", "Legends", "LEG");
  }
}

module.exports = GiantTurtle;
