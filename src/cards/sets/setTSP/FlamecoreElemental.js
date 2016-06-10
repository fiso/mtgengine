"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamecoreElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamecore Elemental", "Time Spiral", "TSP");
  }
}

module.exports = FlamecoreElemental;
