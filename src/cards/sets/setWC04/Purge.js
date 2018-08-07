"use strict";
const Constants = require ("../../../Constants");
const PurgeBase = require("../setTD2/Purge");

class Purge extends PurgeBase {
  constructor (game) {
    super(game, "Purge", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Purge;
