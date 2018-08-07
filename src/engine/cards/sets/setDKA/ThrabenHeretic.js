"use strict";
const Constants = require ("../../../Constants");
const ThrabenHereticBase = require("../setDDQ/ThrabenHeretic");

class ThrabenHeretic extends ThrabenHereticBase {
  constructor (game) {
    super(game, "Thraben Heretic", "Dark Ascension", "DKA");
  }
}

module.exports = ThrabenHeretic;
