"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaChains extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Chains", "Weatherlight", "WTH");
  }
}

module.exports = ManaChains;
