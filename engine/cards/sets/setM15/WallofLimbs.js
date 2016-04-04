"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofLimbs extends Card {
  constructor(game) {
    super(game, "Wall of Limbs", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofLimbs;
