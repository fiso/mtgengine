"use strict";
const Constants = require ("../../../Constants");
const ShowerofSparksBase = require("../setDDL/ShowerofSparks");

class ShowerofSparks extends ShowerofSparksBase {
  constructor (game) {
    super(game, "Shower of Sparks", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ShowerofSparks;
