"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainofSilence extends Card {
  constructor(game) {
    super(game, "Chain of Silence", "Onslaught", "ONS");
  }
}

module.exports = ChainofSilence;
