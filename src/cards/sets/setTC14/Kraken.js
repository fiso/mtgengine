"use strict";
const Constants = require ("../../../Constants");
const KrakenBase = require("../setTA25/Kraken");

class Kraken extends KrakenBase {
  constructor (game) {
    super(game, "Kraken", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Kraken;
