"use strict";
const Constants = require ("../../../Constants");
const FuryoftheHordeBase = require("../setCSP/FuryoftheHorde");

class FuryoftheHorde extends FuryoftheHordeBase {
  constructor(game) {
    super(game, "Fury of the Horde", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FuryoftheHorde;
