"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Sliver", "Legions", "LGN");
  }
}

module.exports = SpectralSliver;
