"use strict";
const Constants = require ("../../../Constants");
const ChainReactionBase = require("../setC18/ChainReaction");

class ChainReaction extends ChainReactionBase {
  constructor (game) {
    super(game, "Chain Reaction", "Commander 2011", "CMD");
  }
}

module.exports = ChainReaction;
