"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor(game) {
    super(game, "Underground Sea", "Limited Edition Beta", "LEB");
  }
}

module.exports = UndergroundSea;
