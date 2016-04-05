"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Plague Sliver", "Time Spiral", "TSP");
  }
}

module.exports = PlagueSliver;
