"use strict";
const Constants = require ("../../../Constants");
const WildMongrelBase = require("../setGVL/WildMongrel");

class WildMongrel extends WildMongrelBase {
  constructor (game) {
    super(game, "Wild Mongrel", "World Championship Decks 2002", "WC02");
  }
}

module.exports = WildMongrel;
