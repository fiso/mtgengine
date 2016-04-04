"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildPair extends Card {
  constructor(game) {
    super(game, "Wild Pair", "Planar Chaos", "PLC");
  }
}

module.exports = WildPair;
