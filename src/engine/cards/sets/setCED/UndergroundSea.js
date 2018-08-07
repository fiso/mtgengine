"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setVMA/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "Collectors’ Edition", "CED");
  }
}

module.exports = UndergroundSea;
