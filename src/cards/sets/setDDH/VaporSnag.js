"use strict";
const Constants = require ("../../../Constants");
const VaporSnagBase = require("../setMM2/VaporSnag");

class VaporSnag extends VaporSnagBase {
  constructor (game) {
    super(game, "Vapor Snag", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = VaporSnag;
