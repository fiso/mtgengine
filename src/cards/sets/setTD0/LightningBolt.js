"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setA25/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = LightningBolt;
