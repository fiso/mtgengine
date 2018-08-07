"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Runner", "Aether Revolt", "AER");
  }
}

module.exports = LightningRunner;
