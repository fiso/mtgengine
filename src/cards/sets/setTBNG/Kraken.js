"use strict";
const Constants = require ("../../../Constants");
const KrakenBase = require("../setTA25/Kraken");

class Kraken extends KrakenBase {
  constructor (game) {
    super(game, "Kraken", "Born of the Gods Tokens", "TBNG");
  }
}

module.exports = Kraken;
