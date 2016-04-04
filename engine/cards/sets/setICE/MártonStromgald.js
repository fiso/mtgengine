"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MártonStromgald extends Card {
  constructor(game) {
    super(game, "Márton Stromgald", "Ice Age", "ICE");
  }
}

module.exports = MártonStromgald;
