"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildPairBase = require("../setPLC/WildPair.js");

class WildPair extends WildPairBase {
  constructor(game) {
    super(game, "Wild Pair", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = WildPair;
