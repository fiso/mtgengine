"use strict";
const Constants = require ("../../../Constants");
const MysticDenialBase = require("../setPTK/MysticDenial");

class MysticDenial extends MysticDenialBase {
  constructor (game) {
    super(game, "Mystic Denial", "Portal Second Age", "P02");
  }
}

module.exports = MysticDenial;
