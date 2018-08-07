"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setVMA/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = UndergroundSea;
