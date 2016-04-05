"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriclopeanSight extends UnimplementedCard {
  constructor(game) {
    super(game, "Triclopean Sight", "Lorwyn", "LRW");
  }
}

module.exports = TriclopeanSight;
