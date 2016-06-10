"use strict";
const Constants = require ("../../../Constants");
const SilverKnightBase = require("../setDDG/SilverKnight");

class SilverKnight extends SilverKnightBase {
  constructor (game) {
    super(game, "Silver Knight", "Friday Night Magic", "pFNM");
  }
}

module.exports = SilverKnight;
