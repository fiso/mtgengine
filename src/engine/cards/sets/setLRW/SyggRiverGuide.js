"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyggRiverGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Sygg, River Guide", "Lorwyn", "LRW");
  }
}

module.exports = SyggRiverGuide;
