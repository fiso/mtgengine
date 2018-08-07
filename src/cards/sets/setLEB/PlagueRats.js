"use strict";
const Constants = require ("../../../Constants");
const PlagueRatsBase = require("../set5ED/PlagueRats");

class PlagueRats extends PlagueRatsBase {
  constructor (game) {
    super(game, "Plague Rats", "Limited Edition Beta", "LEB");
  }
}

module.exports = PlagueRats;
