"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofShields extends Card {
  constructor(game) {
    super(game, "Wall of Shields", "Ice Age", "ICE");
  }
}

module.exports = WallofShields;
