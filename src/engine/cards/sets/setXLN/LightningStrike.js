"use strict";
const Constants = require ("../../../Constants");
const LightningStrikeBase = require("../setM19/LightningStrike");

class LightningStrike extends LightningStrikeBase {
  constructor (game) {
    super(game, "Lightning Strike", "Ixalan", "XLN");
  }
}

module.exports = LightningStrike;
