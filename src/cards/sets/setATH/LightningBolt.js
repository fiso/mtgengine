"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Bolt", "Anthologies", "ATH");
  }
}

module.exports = LightningBolt;
