"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Duel Decks: Divine vs. Demonic Tokens", "TDDC");
  }
}

module.exports = Demon;
