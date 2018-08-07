"use strict";
const Constants = require ("../../../Constants");
const BladewingtheRisenBase = require("../setIMA/BladewingtheRisen");

class BladewingtheRisen extends BladewingtheRisenBase {
  constructor (game) {
    super(game, "Bladewing the Risen", "Commander Anthology", "CMA");
  }
}

module.exports = BladewingtheRisen;
