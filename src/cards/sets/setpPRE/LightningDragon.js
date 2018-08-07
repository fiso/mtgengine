"use strict";
const Constants = require ("../../../Constants");
const LightningDragonBase = require("../setVMA/LightningDragon");

class LightningDragon extends LightningDragonBase {
  constructor (game) {
    super(game, "Lightning Dragon", "Prerelease Events", "PPRE");
  }
}

module.exports = LightningDragon;
