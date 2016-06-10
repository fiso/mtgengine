"use strict";
const Constants = require ("../../../Constants");
const GolgariRotFarmBase = require("../setC13/GolgariRotFarm");

class GolgariRotFarm extends GolgariRotFarmBase {
  constructor (game) {
    super(game, "Golgari Rot Farm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GolgariRotFarm;
