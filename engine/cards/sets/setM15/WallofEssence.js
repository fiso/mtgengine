"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofEssence extends Card {
  constructor(game) {
    super(game, "Wall of Essence", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofEssence;
