"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralLynx extends Card {
  constructor(game) {
    super(game, "Spectral Lynx", "Apocalypse", "APC");
  }
}

module.exports = SpectralLynx;
