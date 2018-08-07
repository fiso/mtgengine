"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyPoisonSampler extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Poison Sampler", "Unstable", "UST");
  }
}

module.exports = DeadlyPoisonSampler;
