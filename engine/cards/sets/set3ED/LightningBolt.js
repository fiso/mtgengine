"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Revised Edition", "3ED");
  }
}

module.exports = LightningBolt;
