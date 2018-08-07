"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostflameSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostflame Sliver", "Time Spiral", "TSP");
  }
}

module.exports = GhostflameSliver;
