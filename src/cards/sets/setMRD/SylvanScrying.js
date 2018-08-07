"use strict";
const Constants = require ("../../../Constants");
const SylvanScryingBase = require("../setF16/SylvanScrying");

class SylvanScrying extends SylvanScryingBase {
  constructor (game) {
    super(game, "Sylvan Scrying", "Mirrodin", "MRD");
  }
}

module.exports = SylvanScrying;
