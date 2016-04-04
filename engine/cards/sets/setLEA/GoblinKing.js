"use strict";
const Constants = require ("../../../Constants");
const GoblinKingBase = require("../setATH/GoblinKing");

class GoblinKing extends GoblinKingBase {
  constructor(game) {
    super(game, "Goblin King", "Limited Edition Alpha", "LEA");
  }
}

module.exports = GoblinKing;
