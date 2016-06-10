"use strict";
const Constants = require ("../../../Constants");
const CoffinQueenBase = require("../setTMP/CoffinQueen");

class CoffinQueen extends CoffinQueenBase {
  constructor (game) {
    super(game, "Coffin Queen", "Tempest Remastered", "TPR");
  }
}

module.exports = CoffinQueen;
