"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningBoltBase = require("../setATH/LightningBolt.js");

class LightningBolt extends LightningBoltBase {
  constructor(game) {
    super(game, "Lightning Bolt", "Unlimited Edition", "2ED");
  }
}

module.exports = LightningBolt;
