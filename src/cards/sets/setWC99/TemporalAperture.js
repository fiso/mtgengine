"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalAperture extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Aperture", "World Championship Decks 1999", "WC99");
  }
}

module.exports = TemporalAperture;
