"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofLava extends Card {
  constructor(game) {
    super(game, "Wall of Lava", "Ice Age", "ICE");
  }
}

module.exports = WallofLava;
