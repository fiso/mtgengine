"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulmonicSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Pulmonic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = PulmonicSliver;
