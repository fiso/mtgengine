"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaveskimmerAven extends Card {
  constructor(game) {
    super(game, "Waveskimmer Aven", "Shards of Alara", "ALA");
  }
}

module.exports = WaveskimmerAven;
