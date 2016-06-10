"use strict";
const Constants = require ("../../../Constants");
const GenesisBase = require("../setpJGP/Genesis");

class Genesis extends GenesisBase {
  constructor (game) {
    super(game, "Genesis", "Vintage Masters", "VMA");
  }
}

module.exports = Genesis;
