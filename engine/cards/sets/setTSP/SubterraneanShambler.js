"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubterraneanShambler extends UnimplementedCard {
  constructor(game) {
    super(game, "Subterranean Shambler", "Time Spiral", "TSP");
  }
}

module.exports = SubterraneanShambler;
