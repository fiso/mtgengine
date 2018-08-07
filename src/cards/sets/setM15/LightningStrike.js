"use strict";
const Constants = require ("../../../Constants");
const LightningStrikeBase = require("../setM19/LightningStrike");

class LightningStrike extends LightningStrikeBase {
  constructor (game) {
    super(game, "Lightning Strike", "Magic 2015", "M15");
  }
}

module.exports = LightningStrike;
