"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyggRiverGuide extends Card {
  constructor(game) {
    super(game, "Sygg, River Guide", "Lorwyn", "LRW");
  }
}

module.exports = SyggRiverGuide;
