"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaveElemental extends Card {
  constructor(game) {
    super(game, "Wave Elemental", "Mirage", "MIR");
  }
}

module.exports = WaveElemental;
