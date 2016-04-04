"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlaringSpotlight extends Card {
  constructor(game) {
    super(game, "Glaring Spotlight", "Gatecrash", "GTC");
  }
}

module.exports = GlaringSpotlight;
