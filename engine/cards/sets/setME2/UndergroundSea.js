"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor(game) {
    super(game, "Underground Sea", "Masters Edition II", "ME2");
  }
}

module.exports = UndergroundSea;
