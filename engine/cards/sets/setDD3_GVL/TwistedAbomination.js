"use strict";
const Constants = require ("../../../Constants");
const TwistedAbominationBase = require("../setARC/TwistedAbomination");

class TwistedAbomination extends TwistedAbominationBase {
  constructor(game) {
    super(game, "Twisted Abomination", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TwistedAbomination;
