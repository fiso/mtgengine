"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor(game) {
    super(game, "Goblin King", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinKing;
