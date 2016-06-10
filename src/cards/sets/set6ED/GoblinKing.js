"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, "Goblin King", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinKing;
