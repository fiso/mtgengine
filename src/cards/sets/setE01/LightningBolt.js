"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setA25/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = LightningBolt;
