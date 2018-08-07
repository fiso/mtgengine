"use strict";
const Constants = require ("../../../Constants");
const SylvanScryingBase = require("../setF16/SylvanScrying");

class SylvanScrying extends SylvanScryingBase {
  constructor (game) {
    super(game, "Sylvan Scrying", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SylvanScrying;
