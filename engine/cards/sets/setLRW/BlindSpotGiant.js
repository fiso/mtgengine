"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindSpotGiant extends Card {
  constructor(game) {
    super(game, "Blind-Spot Giant", "Lorwyn", "LRW");
  }
}

module.exports = BlindSpotGiant;
