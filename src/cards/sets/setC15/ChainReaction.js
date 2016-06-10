"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainReaction extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain Reaction", "Commander 2015", "C15");
  }
}

module.exports = ChainReaction;
