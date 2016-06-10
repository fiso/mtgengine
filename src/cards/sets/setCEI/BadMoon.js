"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setCED/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "International Collector's Edition", "CEI");
  }
}

module.exports = BadMoon;
