"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Fourth Edition", "4ED");
  }
}

module.exports = LightningBolt;
