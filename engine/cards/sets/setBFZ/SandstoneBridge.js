"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandstoneBridge extends Card {
  constructor(game) {
    super(game, "Sandstone Bridge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SandstoneBridge;
