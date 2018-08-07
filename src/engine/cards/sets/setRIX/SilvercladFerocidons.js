"use strict";
const Constants = require ("../../../Constants");
const SilvercladFerocidonsBase = require("../setPRIX/SilvercladFerocidons");

class SilvercladFerocidons extends SilvercladFerocidonsBase {
  constructor (game) {
    super(game, "Silverclad Ferocidons", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SilvercladFerocidons;
