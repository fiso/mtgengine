"use strict";
const Constants = require ("../../../Constants");
const ThrullBase = require("../setTMM2/Thrull");

class Thrull extends ThrullBase {
  constructor (game) {
    super(game, "Thrull", "Duel Decks Anthology: Divine vs. Demonic Tokens", "TDVD");
  }
}

module.exports = Thrull;
