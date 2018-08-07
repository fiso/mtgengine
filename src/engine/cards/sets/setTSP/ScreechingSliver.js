"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Screeching Sliver", "Time Spiral", "TSP");
  }
}

module.exports = ScreechingSliver;
