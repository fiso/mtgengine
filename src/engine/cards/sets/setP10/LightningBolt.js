"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setA25/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = LightningBolt;
