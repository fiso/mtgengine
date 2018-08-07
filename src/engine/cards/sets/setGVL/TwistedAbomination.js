"use strict";
const Constants = require ("../../../Constants");
const TwistedAbominationBase = require("../setA25/TwistedAbomination");

class TwistedAbomination extends TwistedAbominationBase {
  constructor (game) {
    super(game, "Twisted Abomination", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = TwistedAbomination;
