"use strict";
const Constants = require ("../../../Constants");
const DrownedCatacombBase = require("../setXLN/DrownedCatacomb");

class DrownedCatacomb extends DrownedCatacombBase {
  constructor (game) {
    super(game, "Drowned Catacomb", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DrownedCatacomb;
