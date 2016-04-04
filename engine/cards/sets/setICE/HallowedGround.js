"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallowedGround extends Card {
  constructor(game) {
    super(game, "Hallowed Ground", "Ice Age", "ICE");
  }
}

module.exports = HallowedGround;
