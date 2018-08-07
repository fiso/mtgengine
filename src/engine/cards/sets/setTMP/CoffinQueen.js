"use strict";
const Constants = require ("../../../Constants");
const CoffinQueenBase = require("../setTPR/CoffinQueen");

class CoffinQueen extends CoffinQueenBase {
  constructor (game) {
    super(game, "Coffin Queen", "Tempest", "TMP");
  }
}

module.exports = CoffinQueen;
