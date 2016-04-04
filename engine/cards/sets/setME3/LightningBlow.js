"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningBlowBase = require("../setICE/LightningBlow.js");

class LightningBlow extends LightningBlowBase {
  constructor(game) {
    super(game, "Lightning Blow", "Masters Edition III", "ME3");
  }
}

module.exports = LightningBlow;
