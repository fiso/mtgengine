"use strict";
const Constants = require ("../../../Constants");
const RishadanPortBase = require("../setA25/RishadanPort");

class RishadanPort extends RishadanPortBase {
  constructor (game) {
    super(game, "Rishadan Port", "World Championship Decks 2000", "WC00");
  }
}

module.exports = RishadanPort;
