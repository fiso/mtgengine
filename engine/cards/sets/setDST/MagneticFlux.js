"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagneticFlux extends Card {
  constructor(game) {
    super(game, "Magnetic Flux", "Darksteel", "DST");
  }
}

module.exports = MagneticFlux;
