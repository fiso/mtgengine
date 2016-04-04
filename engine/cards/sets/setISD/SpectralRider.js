"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralRider extends Card {
  constructor(game) {
    super(game, "Spectral Rider", "Innistrad", "ISD");
  }
}

module.exports = SpectralRider;
