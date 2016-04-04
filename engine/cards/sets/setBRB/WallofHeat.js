"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofHeat extends Card {
  constructor(game) {
    super(game, "Wall of Heat", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WallofHeat;
