"use strict";
const Constants = require ("../../../Constants");
const CruelUltimatumBase = require("../setE01/CruelUltimatum");

class CruelUltimatum extends CruelUltimatumBase {
  constructor (game) {
    super(game, "Cruel Ultimatum", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CruelUltimatum;
