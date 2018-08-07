"use strict";
const Constants = require ("../../../Constants");
const BladewingtheRisenBase = require("../setIMA/BladewingtheRisen");

class BladewingtheRisen extends BladewingtheRisenBase {
  constructor (game) {
    super(game, "Bladewing the Risen", "From the Vault: Dragons", "DRB");
  }
}

module.exports = BladewingtheRisen;
