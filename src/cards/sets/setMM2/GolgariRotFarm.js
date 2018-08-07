"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC18/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Modern Masters 2015", "MM2");
  }
}

module.exports = GolgariRotFarm;
