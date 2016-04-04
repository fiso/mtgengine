"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofMulch extends Card {
  constructor(game) {
    super(game, "Wall of Mulch", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofMulch;
