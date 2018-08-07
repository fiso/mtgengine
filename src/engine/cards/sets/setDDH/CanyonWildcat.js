"use strict";
const Constants = require ("../../../Constants");
const CanyonWildcatBase = require("../setTPR/CanyonWildcat");

class CanyonWildcat extends CanyonWildcatBase {
  constructor (game) {
    super(game, "Canyon Wildcat", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CanyonWildcat;
