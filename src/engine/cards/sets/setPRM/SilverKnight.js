"use strict";
const Constants = require ("../../../Constants");
const SilverKnightBase = require("../setDDG/SilverKnight");

class SilverKnight extends SilverKnightBase {
  constructor (game) {
    super(game, "Silver Knight", "Magic Online Promos", "PRM");
  }
}

module.exports = SilverKnight;
