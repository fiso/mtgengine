"use strict";
const Constants = require ("../../../Constants");
const DrownedCatacombBase = require("../setXLN/DrownedCatacomb");

class DrownedCatacomb extends DrownedCatacombBase {
  constructor (game) {
    super(game, "Drowned Catacomb", "Magic 2012", "M12");
  }
}

module.exports = DrownedCatacomb;
