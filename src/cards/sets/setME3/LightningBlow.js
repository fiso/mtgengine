"use strict";
const Constants = require ("../../../Constants");
const LightningBlowBase = require("../setICE/LightningBlow");

class LightningBlow extends LightningBlowBase {
  constructor (game) {
    super(game, "Lightning Blow", "Masters Edition III", "ME3");
  }
}

module.exports = LightningBlow;
