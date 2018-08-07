"use strict";
const Constants = require ("../../../Constants");
const SilverKnightBase = require("../setDDG/SilverKnight");

class SilverKnight extends SilverKnightBase {
  constructor (game) {
    super(game, "Silver Knight", "Friday Night Magic 2004", "F04");
  }
}

module.exports = SilverKnight;
