"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedWoodland extends Card {
  constructor(game) {
    super(game, "Blighted Woodland", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedWoodland;
