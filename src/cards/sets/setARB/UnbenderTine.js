"use strict";
const Constants = require ("../../../Constants");
const UnbenderTineBase = require("../setARC/UnbenderTine");

class UnbenderTine extends UnbenderTineBase {
  constructor (game) {
    super(game, "Unbender Tine", "Alara Reborn", "ARB");
  }
}

module.exports = UnbenderTine;
