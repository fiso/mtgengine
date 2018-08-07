"use strict";
const Constants = require ("../../../Constants");
const WildPairBase = require("../setCN2/WildPair");

class WildPair extends WildPairBase {
  constructor (game) {
    super(game, "Wild Pair", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = WildPair;
