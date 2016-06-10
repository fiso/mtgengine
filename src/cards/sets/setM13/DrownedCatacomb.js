"use strict";
const Constants = require ("../../../Constants");
const DrownedCatacombBase = require("../setM10/DrownedCatacomb");

class DrownedCatacomb extends DrownedCatacombBase {
  constructor (game) {
    super(game, "Drowned Catacomb", "Magic 2013", "M13");
  }
}

module.exports = DrownedCatacomb;
