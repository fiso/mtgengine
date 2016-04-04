"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandGuidance extends Card {
  constructor(game) {
    super(game, "Woodland Guidance", "Lorwyn", "LRW");
  }
}

module.exports = WoodlandGuidance;
