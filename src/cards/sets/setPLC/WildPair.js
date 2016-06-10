"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildPair extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Pair", "Planar Chaos", "PLC");
  }
}

module.exports = WildPair;
