"use strict";
const Constants = require ("../../../Constants");
const ThrullBase = require("../setTMM2/Thrull");

class Thrull extends ThrullBase {
  constructor (game) {
    super(game, "Thrull", "Duel Decks: Divine vs. Demonic Tokens", "TDDC");
  }
}

module.exports = Thrull;
