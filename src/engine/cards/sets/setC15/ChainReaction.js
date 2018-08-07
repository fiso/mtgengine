"use strict";
const Constants = require ("../../../Constants");
const ChainReactionBase = require("../setC18/ChainReaction");

class ChainReaction extends ChainReactionBase {
  constructor (game) {
    super(game, "Chain Reaction", "Commander 2015", "C15");
  }
}

module.exports = ChainReaction;
