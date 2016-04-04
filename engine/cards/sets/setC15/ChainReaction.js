"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainReaction extends Card {
  constructor(game) {
    super(game, "Chain Reaction", "Commander 2015", "C15");
  }
}

module.exports = ChainReaction;
