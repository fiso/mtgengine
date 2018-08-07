"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheChainVeil extends UnimplementedCard {
  constructor (game) {
    super(game, "The Chain Veil", "Magic 2015", "M15");
  }
}

module.exports = TheChainVeil;
