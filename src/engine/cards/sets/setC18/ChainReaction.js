"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainReaction extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain Reaction", "Commander 2018", "C18");
  }
}

module.exports = ChainReaction;
