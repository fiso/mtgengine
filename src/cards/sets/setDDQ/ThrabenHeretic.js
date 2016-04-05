"use strict";
const Constants = require ("../../../Constants");
const ThrabenHereticBase = require("../setDKA/ThrabenHeretic");

class ThrabenHeretic extends ThrabenHereticBase {
  constructor(game) {
    super(game, "Thraben Heretic", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ThrabenHeretic;
