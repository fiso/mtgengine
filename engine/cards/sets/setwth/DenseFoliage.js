"use strict";
const Constants = require ("../../../Constants");
const DenseFoliageBase = require("../set6ED/DenseFoliage");

class DenseFoliage extends DenseFoliageBase {
  constructor(game) {
    super(game, "Dense Foliage", "Weatherlight", "WTH");
  }
}

module.exports = DenseFoliage;
