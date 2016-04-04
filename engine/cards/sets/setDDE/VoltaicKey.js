"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoltaicKey extends Card {
  constructor(game) {
    super(game, "Voltaic Key", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = VoltaicKey;
