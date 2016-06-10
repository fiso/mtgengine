"use strict";
const Constants = require ("../../../Constants");
const ButcherofMalakirBase = require("../setC14/ButcherofMalakir");

class ButcherofMalakir extends ButcherofMalakirBase {
  constructor (game) {
    super(game, "Butcher of Malakir", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ButcherofMalakir;
