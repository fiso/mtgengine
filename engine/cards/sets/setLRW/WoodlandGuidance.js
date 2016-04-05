"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandGuidance extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodland Guidance", "Lorwyn", "LRW");
  }
}

module.exports = WoodlandGuidance;
