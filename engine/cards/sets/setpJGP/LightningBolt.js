"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt.js");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Judge Gift Program", "pJGP");
  }
}

module.exports = LightningBolt;
