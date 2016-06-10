"use strict";
const Constants = require ("../../../Constants");
const BladewingtheRisenBase = require("../setDRB/BladewingtheRisen");

class BladewingtheRisen extends BladewingtheRisenBase {
  constructor (game) {
    super(game, "Bladewing the Risen", "Scourge", "SCG");
  }
}

module.exports = BladewingtheRisen;
