"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC18/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GolgariRotFarm;
