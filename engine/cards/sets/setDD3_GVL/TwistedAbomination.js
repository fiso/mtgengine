"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwistedAbominationBase = require("../setARC/TwistedAbomination.js");

class TwistedAbomination extends TwistedAbominationBase {
  constructor(game) {
    super(game, "Twisted Abomination", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TwistedAbomination;
