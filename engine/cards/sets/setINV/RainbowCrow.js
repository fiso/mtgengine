"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainbowCrow extends Card {
  constructor(game) {
    super(game, "Rainbow Crow", "Invasion", "INV");
  }
}

module.exports = RainbowCrow;
