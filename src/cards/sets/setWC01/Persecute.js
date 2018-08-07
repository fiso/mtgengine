"use strict";
const Constants = require ("../../../Constants");
const PersecuteBase = require("../set9ED/Persecute");

class Persecute extends PersecuteBase {
  constructor (game) {
    super(game, "Persecute", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Persecute;
