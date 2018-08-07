"use strict";
const Constants = require ("../../../Constants");
const FleshtoDustBase = require("../setORI/FleshtoDust");

class FleshtoDust extends FleshtoDustBase {
  constructor (game) {
    super(game, "Flesh to Dust", "Magic 2015", "M15");
  }
}

module.exports = FleshtoDust;
