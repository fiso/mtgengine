"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlindSpotGiantBase = require("../setLRW/BlindSpotGiant.js");

class BlindSpotGiant extends BlindSpotGiantBase {
  constructor(game) {
    super(game, "Blind-Spot Giant", "Modern Masters", "MMA");
  }
}

module.exports = BlindSpotGiant;
