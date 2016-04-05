"use strict";
const Constants = require ("../../../Constants");
const GoldmeadowHarrierBase = require("../setDDF/GoldmeadowHarrier");

class GoldmeadowHarrier extends GoldmeadowHarrierBase {
  constructor(game) {
    super(game, "Goldmeadow Harrier", "Lorwyn", "LRW");
  }
}

module.exports = GoldmeadowHarrier;
