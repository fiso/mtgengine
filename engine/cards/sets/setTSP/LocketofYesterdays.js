"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LocketofYesterdays extends UnimplementedCard {
  constructor(game) {
    super(game, "Locket of Yesterdays", "Time Spiral", "TSP");
  }
}

module.exports = LocketofYesterdays;
