"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralCloak extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Cloak", "Legends", "LEG");
  }
}

module.exports = SpectralCloak;
