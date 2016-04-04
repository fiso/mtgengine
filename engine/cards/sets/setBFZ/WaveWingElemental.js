"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaveWingElemental extends Card {
  constructor(game) {
    super(game, "Wave-Wing Elemental", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WaveWingElemental;
