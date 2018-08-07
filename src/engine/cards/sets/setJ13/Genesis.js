"use strict";
const Constants = require ("../../../Constants");
const GenesisBase = require("../setVMA/Genesis");

class Genesis extends GenesisBase {
  constructor (game) {
    super(game, "Genesis", "Judge Gift Cards 2013", "J13");
  }
}

module.exports = Genesis;
