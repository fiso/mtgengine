"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindSpotGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind-Spot Giant", "Lorwyn", "LRW");
  }
}

module.exports = BlindSpotGiant;
