"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Judge Gift Program", "pJGP");
  }
}

module.exports = LightningBolt;
