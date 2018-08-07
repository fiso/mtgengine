"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC18/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Iconic Masters", "IMA");
  }
}

module.exports = GolgariRotFarm;
