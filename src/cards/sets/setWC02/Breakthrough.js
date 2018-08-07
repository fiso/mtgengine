"use strict";
const Constants = require ("../../../Constants");
const BreakthroughBase = require("../setCNS/Breakthrough");

class Breakthrough extends BreakthroughBase {
  constructor (game) {
    super(game, "Breakthrough", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Breakthrough;
