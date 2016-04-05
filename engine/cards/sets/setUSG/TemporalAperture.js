"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalAperture extends UnimplementedCard {
  constructor(game) {
    super(game, "Temporal Aperture", "Urza's Saga", "USG");
  }
}

module.exports = TemporalAperture;
