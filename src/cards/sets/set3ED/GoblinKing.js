"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, "Goblin King", "Revised Edition", "3ED");
  }
}

module.exports = GoblinKing;
