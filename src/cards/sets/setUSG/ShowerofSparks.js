"use strict";
const Constants = require ("../../../Constants");
const ShowerofSparksBase = require("../setDDL/ShowerofSparks");

class ShowerofSparks extends ShowerofSparksBase {
  constructor (game) {
    super(game, "Shower of Sparks", "Urza's Saga", "USG");
  }
}

module.exports = ShowerofSparks;
