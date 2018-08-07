"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagneticFlux extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnetic Flux", "Darksteel", "DST");
  }
}

module.exports = MagneticFlux;
