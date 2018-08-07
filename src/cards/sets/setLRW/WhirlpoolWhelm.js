"use strict";
const Constants = require ("../../../Constants");
const WhirlpoolWhelmBase = require("../setCMD/WhirlpoolWhelm");

class WhirlpoolWhelm extends WhirlpoolWhelmBase {
  constructor (game) {
    super(game, "Whirlpool Whelm", "Lorwyn", "LRW");
  }
}

module.exports = WhirlpoolWhelm;
