"use strict";
const Constants = require ("../../../Constants");
const DarksteelCitadelBase = require("../setC14/DarksteelCitadel");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor(game) {
    super(game, "Darksteel Citadel", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = DarksteelCitadel;
