"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChainReactionBase = require("../setC15/ChainReaction.js");

class ChainReaction extends ChainReactionBase {
  constructor(game) {
    super(game, "Chain Reaction", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChainReaction;
