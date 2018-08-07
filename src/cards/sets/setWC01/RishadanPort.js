"use strict";
const Constants = require ("../../../Constants");
const RishadanPortBase = require("../setA25/RishadanPort");

class RishadanPort extends RishadanPortBase {
  constructor (game) {
    super(game, "Rishadan Port", "World Championship Decks 2001", "WC01");
  }
}

module.exports = RishadanPort;
