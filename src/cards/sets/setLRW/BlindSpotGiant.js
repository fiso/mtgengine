"use strict";
const Constants = require ("../../../Constants");
const BlindSpotGiantBase = require("../setMMA/BlindSpotGiant");

class BlindSpotGiant extends BlindSpotGiantBase {
  constructor (game) {
    super(game, "Blind-Spot Giant", "Lorwyn", "LRW");
  }
}

module.exports = BlindSpotGiant;
