"use strict";
const Constants = require ("../../../Constants");
const PersecuteBase = require("../set9ED/Persecute");

class Persecute extends PersecuteBase {
  constructor (game) {
    super(game, "Persecute", "Urza's Saga", "USG");
  }
}

module.exports = Persecute;
