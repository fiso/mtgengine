"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrevatheRenewer extends Card {
  constructor(game) {
    super(game, "Treva, the Renewer", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TrevatheRenewer;
