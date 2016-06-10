"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setCED/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "Limited Edition Beta", "LEB");
  }
}

module.exports = BadMoon;
