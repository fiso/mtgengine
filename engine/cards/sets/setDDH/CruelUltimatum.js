"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelUltimatumBase = require("../setC13/CruelUltimatum.js");

class CruelUltimatum extends CruelUltimatumBase {
  constructor(game) {
    super(game, "Cruel Ultimatum", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CruelUltimatum;
