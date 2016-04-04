"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningBolt extends Card {
  constructor(game) {
    super(game, "Lightning Bolt", "Anthologies", "ATH");
  }
}

module.exports = LightningBolt;
