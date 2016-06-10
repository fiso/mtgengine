"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PendrellFlux extends UnimplementedCard {
  constructor (game) {
    super(game, "Pendrell Flux", "Urza's Saga", "USG");
  }
}

module.exports = PendrellFlux;
