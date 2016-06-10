"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = LightningBolt;
