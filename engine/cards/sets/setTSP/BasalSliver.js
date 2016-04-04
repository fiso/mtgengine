"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasalSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Basal Sliver", "Time Spiral", "TSP");
  }
}

module.exports = BasalSliver;
