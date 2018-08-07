"use strict";
const Constants = require ("../../../Constants");
const LightningBoltBase = require("../setA25/LightningBolt");

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, "Lightning Bolt", "Judge Gift Cards 1998", "JGP");
  }
}

module.exports = LightningBolt;
