"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "Limited Edition Alpha", "LEA");
  }
}

module.exports = UndergroundSea;
