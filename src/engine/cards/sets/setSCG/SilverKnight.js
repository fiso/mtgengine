"use strict";
const Constants = require ("../../../Constants");
const SilverKnightBase = require("../setDDG/SilverKnight");

class SilverKnight extends SilverKnightBase {
  constructor (game) {
    super(game, "Silver Knight", "Scourge", "SCG");
  }
}

module.exports = SilverKnight;
