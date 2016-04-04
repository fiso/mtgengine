"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralCloak extends Card {
  constructor(game) {
    super(game, "Spectral Cloak", "Legends", "LEG");
  }
}

module.exports = SpectralCloak;
