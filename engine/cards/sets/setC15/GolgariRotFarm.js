"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC13/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor(game) {
    super(game, "Golgari Rot Farm", "Commander 2015", "C15");
  }
}

module.exports = GolgariRotFarm;
