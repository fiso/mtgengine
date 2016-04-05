"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusBloom extends UnimplementedCard {
  constructor(game) {
    super(game, "Lotus Bloom", "Modern Masters", "MMA");
  }
}

module.exports = LotusBloom;
