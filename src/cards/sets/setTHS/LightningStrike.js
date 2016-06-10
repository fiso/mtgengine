"use strict";
const Constants = require ("../../../Constants");
const LightningStrikeBase = require("../setM15/LightningStrike");

class LightningStrike extends LightningStrikeBase {
  constructor (game) {
    super(game, "Lightning Strike", "Theros", "THS");
  }
}

module.exports = LightningStrike;
