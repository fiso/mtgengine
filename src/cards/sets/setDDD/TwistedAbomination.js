"use strict";
const Constants = require ("../../../Constants");
const TwistedAbominationBase = require("../setARC/TwistedAbomination");

class TwistedAbomination extends TwistedAbominationBase {
  constructor (game) {
    super(game, "Twisted Abomination", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = TwistedAbomination;
