"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WormfangTurtle extends UnimplementedCard {
  constructor(game) {
    super(game, "Wormfang Turtle", "Judgment", "JUD");
  }
}

module.exports = WormfangTurtle;
