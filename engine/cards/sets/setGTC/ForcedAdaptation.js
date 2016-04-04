"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForcedAdaptation extends Card {
  constructor(game) {
    super(game, "Forced Adaptation", "Gatecrash", "GTC");
  }
}

module.exports = ForcedAdaptation;
