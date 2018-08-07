"use strict";
const Constants = require ("../../../Constants");
const BlackSunsZenithBase = require("../setC14/BlackSunsZenith");

class BlackSunsZenith extends BlackSunsZenithBase {
  constructor (game) {
    super(game, "Black Sun's Zenith", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = BlackSunsZenith;
