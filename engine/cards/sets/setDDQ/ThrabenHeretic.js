"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrabenHereticBase = require("../setDKA/ThrabenHeretic.js");

class ThrabenHeretic extends ThrabenHereticBase {
  constructor(game) {
    super(game, "Thraben Heretic", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ThrabenHeretic;
