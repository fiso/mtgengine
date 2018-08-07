"use strict";
const Constants = require ("../../../Constants");
const UndergroundSeaBase = require("../setVMA/UndergroundSea");

class UndergroundSea extends UndergroundSeaBase {
  constructor (game) {
    super(game, "Underground Sea", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = UndergroundSea;
