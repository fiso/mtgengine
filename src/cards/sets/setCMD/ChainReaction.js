"use strict";
const Constants = require ("../../../Constants");
const ChainReactionBase = require("../setC15/ChainReaction");

class ChainReaction extends ChainReactionBase {
  constructor (game) {
    super(game, "Chain Reaction", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChainReaction;
