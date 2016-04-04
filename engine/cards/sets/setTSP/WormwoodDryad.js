"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WormwoodDryad extends UnimplementedCard {
  constructor(game) {
    super(game, "Wormwood Dryad", "Time Spiral", "TSP");
  }
}

module.exports = WormwoodDryad;
