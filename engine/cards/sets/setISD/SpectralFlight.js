"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralFlight extends Card {
  constructor(game) {
    super(game, "Spectral Flight", "Innistrad", "ISD");
  }
}

module.exports = SpectralFlight;
