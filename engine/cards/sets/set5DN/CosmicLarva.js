"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CosmicLarva extends UnimplementedCard {
  constructor(game) {
    super(game, "Cosmic Larva", "Fifth Dawn", "5DN");
  }
}

module.exports = CosmicLarva;
