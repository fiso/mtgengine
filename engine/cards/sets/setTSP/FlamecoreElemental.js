"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamecoreElemental extends Card {
  constructor(game) {
    super(game, "Flamecore Elemental", "Time Spiral", "TSP");
  }
}

module.exports = FlamecoreElemental;
