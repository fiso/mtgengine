"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelCitadelBase = require("../setC14/DarksteelCitadel.js");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor(game) {
    super(game, "Darksteel Citadel", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = DarksteelCitadel;
