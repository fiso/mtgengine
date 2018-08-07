"use strict";
const Constants = require ("../../../Constants");
const SylvanRangerBase = require("../setCMA/SylvanRanger");

class SylvanRanger extends SylvanRangerBase {
  constructor (game) {
    super(game, "Sylvan Ranger", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SylvanRanger;
