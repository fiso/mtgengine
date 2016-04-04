"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor(game) {
    super(game, "Goblin King", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinKing;
