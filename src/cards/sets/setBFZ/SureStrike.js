"use strict";
const Constants = require ("../../../Constants");
const SureStrikeBase = require("../setM19/SureStrike");

class SureStrike extends SureStrikeBase {
  constructor (game) {
    super(game, "Sure Strike", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SureStrike;
