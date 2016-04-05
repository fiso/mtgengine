"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SedgeSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Sedge Sliver", "Time Spiral", "TSP");
  }
}

module.exports = SedgeSliver;
