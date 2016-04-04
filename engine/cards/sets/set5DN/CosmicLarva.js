"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CosmicLarva extends Card {
  constructor(game) {
    super(game, "Cosmic Larva", "Fifth Dawn", "5DN");
  }
}

module.exports = CosmicLarva;
