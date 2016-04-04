"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoldmeadowHarrierBase = require("../setDDF/GoldmeadowHarrier.js");

class GoldmeadowHarrier extends GoldmeadowHarrierBase {
  constructor(game) {
    super(game, "Goldmeadow Harrier", "Lorwyn", "LRW");
  }
}

module.exports = GoldmeadowHarrier;
