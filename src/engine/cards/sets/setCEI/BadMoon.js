"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setGVL/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = BadMoon;
