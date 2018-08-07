"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../set10E/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, "Goblin King", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinKing;
