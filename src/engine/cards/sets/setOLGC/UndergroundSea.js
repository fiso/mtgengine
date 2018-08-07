"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setVMA/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "Legacy Championship", "OLGC");
  }
}

module.exports = UndergroundSea;
