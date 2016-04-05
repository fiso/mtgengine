"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensersSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Venser's Sliver", "Time Spiral", "TSP");
  }
}

module.exports = VensersSliver;
