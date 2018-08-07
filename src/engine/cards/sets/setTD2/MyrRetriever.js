"use strict";
const Constants = require ("../../../Constants");
const MyrRetrieverBase = require("../setCM2/MyrRetriever");

class MyrRetriever extends MyrRetrieverBase {
  constructor (game) {
    super(game, "Myr Retriever", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = MyrRetriever;
