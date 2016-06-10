"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainofSmog extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain of Smog", "Onslaught", "ONS");
  }
}

module.exports = ChainofSmog;
