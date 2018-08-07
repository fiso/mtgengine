"use strict";
const Constants = require ("../../../Constants");
const StripMineBase = require("../setEXP/StripMine");

class StripMine extends StripMineBase {
  constructor (game) {
    super(game, "Strip Mine", "From the Vault: Exiled", "V09");
  }
}

module.exports = StripMine;
