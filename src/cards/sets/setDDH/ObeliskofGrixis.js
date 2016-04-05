"use strict";
const Constants = require ("../../../Constants");
const ObeliskofGrixisBase = require("../setC13/ObeliskofGrixis");

class ObeliskofGrixis extends ObeliskofGrixisBase {
  constructor(game) {
    super(game, "Obelisk of Grixis", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = ObeliskofGrixis;
