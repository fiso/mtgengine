"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofHeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Heat", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WallofHeat;
