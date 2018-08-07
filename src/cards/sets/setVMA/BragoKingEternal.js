"use strict";
const Constants = require ("../../../Constants");
const BragoKingEternalBase = require("../setEMA/BragoKingEternal");

class BragoKingEternal extends BragoKingEternalBase {
  constructor (game) {
    super(game, "Brago, King Eternal", "Vintage Masters", "VMA");
  }
}

module.exports = BragoKingEternal;
