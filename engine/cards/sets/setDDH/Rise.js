"use strict";
const Constants = require ("../../../Constants");
const RiseBase = require("../setDIS/Rise");

class Rise extends RiseBase {
  constructor(game) {
    super(game, "Rise", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Rise;
