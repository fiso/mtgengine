"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningDragonBase = require("../setpPRE/LightningDragon.js");

class LightningDragon extends LightningDragonBase {
  constructor(game) {
    super(game, "Lightning Dragon", "Urza's Saga", "USG");
  }
}

module.exports = LightningDragon;
