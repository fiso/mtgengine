"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC13/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor(game) {
    super(game, "Golgari Rot Farm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariRotFarm;
