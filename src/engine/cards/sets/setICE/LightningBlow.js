"use strict";
const Constants = require ("../../../Constants");
const LightningBlowBase = require("../setME3/LightningBlow");

class LightningBlow extends LightningBlowBase {
  constructor (game) {
    super(game, "Lightning Blow", "Ice Age", "ICE");
  }
}

module.exports = LightningBlow;
