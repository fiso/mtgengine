"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveskimmerAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Waveskimmer Aven", "Shards of Alara", "ALA");
  }
}

module.exports = WaveskimmerAven;
