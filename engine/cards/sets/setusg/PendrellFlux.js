"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PendrellFlux extends Card {
  constructor(game) {
    super(game, "Pendrell Flux", "Urza's Saga", "USG");
  }
}

module.exports = PendrellFlux;
