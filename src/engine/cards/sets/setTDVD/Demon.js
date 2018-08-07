"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Duel Decks Anthology: Divine vs. Demonic Tokens", "TDVD");
  }
}

module.exports = Demon;
