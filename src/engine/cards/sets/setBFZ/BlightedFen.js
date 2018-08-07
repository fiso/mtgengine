"use strict";
const Constants = require ("../../../Constants");
const BlightedFenBase = require("../setF16/BlightedFen");

class BlightedFen extends BlightedFenBase {
  constructor (game) {
    super(game, "Blighted Fen", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedFen;
