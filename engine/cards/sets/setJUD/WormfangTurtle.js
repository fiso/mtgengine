"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WormfangTurtle extends Card {
  constructor(game) {
    super(game, "Wormfang Turtle", "Judgment", "JUD");
  }
}

module.exports = WormfangTurtle;
