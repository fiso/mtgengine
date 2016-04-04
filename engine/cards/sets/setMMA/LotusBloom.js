"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusBloom extends Card {
  constructor(game) {
    super(game, "Lotus Bloom", "Modern Masters", "MMA");
  }
}

module.exports = LotusBloom;
