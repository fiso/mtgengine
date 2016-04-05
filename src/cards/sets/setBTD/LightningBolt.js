"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Beatdown Box Set", "BTD");
  }
}

module.exports = LightningBolt;
