"use strict";
const Constants = require ("../../../Constants");
const DrownedCatacombBase = require("../setXLN/DrownedCatacomb");

class DrownedCatacomb extends DrownedCatacombBase {
  constructor (game) {
    super(game, "Drowned Catacomb", "Ixalan Promos", "PXLN");
  }
}

module.exports = DrownedCatacomb;
