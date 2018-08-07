"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../set10E/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, "Goblin King", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinKing;
