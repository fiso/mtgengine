"use strict";
const Constants = require ("../../../Constants");
const GenesisBase = require("../setpJGP/Genesis");

class Genesis extends GenesisBase {
  constructor (game) {
    super(game, "Genesis", "Judgment", "JUD");
  }
}

module.exports = Genesis;
