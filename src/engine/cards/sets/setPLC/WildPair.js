"use strict";
const Constants = require ("../../../Constants");
const WildPairBase = require("../setCN2/WildPair");

class WildPair extends WildPairBase {
  constructor (game) {
    super(game, "Wild Pair", "Planar Chaos", "PLC");
  }
}

module.exports = WildPair;
