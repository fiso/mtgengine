"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantTurtle extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Turtle", "Legends", "LEG");
  }
}

module.exports = GiantTurtle;
