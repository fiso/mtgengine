"use strict";
const Constants = require ("../../../Constants");
const BladewingsThrallBase = require("../setIMA/BladewingsThrall");

class BladewingsThrall extends BladewingsThrallBase {
  constructor (game) {
    super(game, "Bladewing's Thrall", "Scourge", "SCG");
  }
}

module.exports = BladewingsThrall;
