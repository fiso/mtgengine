"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralLynx extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Lynx", "Apocalypse", "APC");
  }
}

module.exports = SpectralLynx;
