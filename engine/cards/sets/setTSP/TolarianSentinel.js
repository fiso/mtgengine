"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianSentinel extends UnimplementedCard {
  constructor(game) {
    super(game, "Tolarian Sentinel", "Time Spiral", "TSP");
  }
}

module.exports = TolarianSentinel;
