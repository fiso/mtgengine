"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TelekineticSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Telekinetic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = TelekineticSliver;
