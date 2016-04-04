"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Magic 2011", "M11");
  }
}

module.exports = LightningBolt;
