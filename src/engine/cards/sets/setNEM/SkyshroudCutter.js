"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshroudCutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshroud Cutter", "Nemesis", "NEM");
  }
}

module.exports = SkyshroudCutter;
