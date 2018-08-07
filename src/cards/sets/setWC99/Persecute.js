"use strict";
const Constants = require ("../../../Constants");
const PersecuteBase = require("../set9ED/Persecute");

class Persecute extends PersecuteBase {
  constructor (game) {
    super(game, "Persecute", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Persecute;
