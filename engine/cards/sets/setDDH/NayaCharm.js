"use strict";
const Constants = require ("../../../Constants");
const NayaCharmBase = require("../setC13/NayaCharm");

class NayaCharm extends NayaCharmBase {
  constructor(game) {
    super(game, "Naya Charm", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = NayaCharm;
