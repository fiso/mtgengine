"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeTiller extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Tiller", "Time Spiral", "TSP");
  }
}

module.exports = SpikeTiller;
