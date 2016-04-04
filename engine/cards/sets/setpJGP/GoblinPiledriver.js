"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinPiledriver extends Card {
  constructor(game) {
    super(game, "Goblin Piledriver", "Judge Gift Program", "pJGP");
  }
}

module.exports = GoblinPiledriver;
