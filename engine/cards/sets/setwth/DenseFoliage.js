"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DenseFoliageBase = require("../set6ED/DenseFoliage.js");

class DenseFoliage extends DenseFoliageBase {
  constructor(game) {
    super(game, "Dense Foliage", "Weatherlight", "WTH");
  }
}

module.exports = DenseFoliage;
