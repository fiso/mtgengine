"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealedFate extends Card {
  constructor(game) {
    super(game, "Sealed Fate", "Mirage", "MIR");
  }
}

module.exports = SealedFate;
