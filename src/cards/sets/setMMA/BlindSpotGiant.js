"use strict";
const Constants = require ("../../../Constants");
const BlindSpotGiantBase = require("../setLRW/BlindSpotGiant");

class BlindSpotGiant extends BlindSpotGiantBase {
  constructor (game) {
    super(game, "Blind-Spot Giant", "Modern Masters", "MMA");
  }
}

module.exports = BlindSpotGiant;
