"use strict";
const Constants = require ("../../../Constants");
const DarksteelCitadelBase = require("../setC18/DarksteelCitadel");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor (game) {
    super(game, "Darksteel Citadel", "World Championship Decks 2004", "WC04");
  }
}

module.exports = DarksteelCitadel;
