"use strict";
const Constants = require ("../../../Constants");
const SearingSpearBase = require("../setE01/SearingSpear");

class SearingSpear extends SearingSpearBase {
  constructor (game) {
    super(game, "Searing Spear", "Magic 2013", "M13");
  }
}

module.exports = SearingSpear;
