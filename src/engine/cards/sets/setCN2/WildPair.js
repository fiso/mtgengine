"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildPair extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Pair", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = WildPair;
