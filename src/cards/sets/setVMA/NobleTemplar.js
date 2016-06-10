"use strict";
const Constants = require ("../../../Constants");
const NobleTemplarBase = require("../setDDO/NobleTemplar");

class NobleTemplar extends NobleTemplarBase {
  constructor (game) {
    super(game, "Noble Templar", "Vintage Masters", "VMA");
  }
}

module.exports = NobleTemplar;
