"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarmonicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Harmonic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = HarmonicSliver;
