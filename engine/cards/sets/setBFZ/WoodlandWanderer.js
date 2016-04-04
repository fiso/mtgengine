"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandWanderer extends Card {
  constructor(game) {
    super(game, "Woodland Wanderer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WoodlandWanderer;
