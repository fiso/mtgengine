"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC18/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Commander 2013", "C13");
  }
}

module.exports = GolgariRotFarm;
