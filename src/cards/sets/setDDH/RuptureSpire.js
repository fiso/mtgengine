"use strict";
const Constants = require ("../../../Constants");
const RuptureSpireBase = require("../setM19/RuptureSpire");

class RuptureSpire extends RuptureSpireBase {
  constructor (game) {
    super(game, "Rupture Spire", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = RuptureSpire;
