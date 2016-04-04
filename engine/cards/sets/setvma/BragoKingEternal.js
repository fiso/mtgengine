"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BragoKingEternalBase = require("../setCNS/BragoKingEternal.js");

class BragoKingEternal extends BragoKingEternalBase {
  constructor(game) {
    super(game, "Brago, King Eternal", "Vintage Masters", "VMA");
  }
}

module.exports = BragoKingEternal;
