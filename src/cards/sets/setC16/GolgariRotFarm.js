"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC18/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Commander 2016", "C16");
  }
}

module.exports = GolgariRotFarm;
