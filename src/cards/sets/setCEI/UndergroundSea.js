"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "International Collector's Edition", "CEI");
  }
}

module.exports = UndergroundSea;
