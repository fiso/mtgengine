"use strict";
const Constants = require ("../../../Constants");
const GoblinChainwhirlerBase = require("../setDOM/GoblinChainwhirler");

class GoblinChainwhirler extends GoblinChainwhirlerBase {
  constructor (game) {
    super(game, "Goblin Chainwhirler", "Dominaria Promos", "PDOM");
  }
}

module.exports = GoblinChainwhirler;
