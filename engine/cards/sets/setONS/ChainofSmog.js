"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainofSmog extends Card {
  constructor(game) {
    super(game, "Chain of Smog", "Onslaught", "ONS");
  }
}

module.exports = ChainofSmog;
