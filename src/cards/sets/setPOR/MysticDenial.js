"use strict";
const Constants = require ("../../../Constants");
const MysticDenialBase = require("../setPTK/MysticDenial");

class MysticDenial extends MysticDenialBase {
  constructor (game) {
    super(game, "Mystic Denial", "Portal", "POR");
  }
}

module.exports = MysticDenial;
