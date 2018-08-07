"use strict";
const Constants = require ("../../../Constants");
const LightningDragonBase = require("../setVMA/LightningDragon");

class LightningDragon extends LightningDragonBase {
  constructor (game) {
    super(game, "Lightning Dragon", "Urza's Saga", "USG");
  }
}

module.exports = LightningDragon;
