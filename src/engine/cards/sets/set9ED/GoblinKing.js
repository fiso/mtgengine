"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../set10E/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor (game) {
    super(game, "Goblin King", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinKing;
