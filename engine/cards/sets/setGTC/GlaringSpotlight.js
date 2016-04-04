"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlaringSpotlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Glaring Spotlight", "Gatecrash", "GTC");
  }
}

module.exports = GlaringSpotlight;
