"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setGVL/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = BadMoon;
