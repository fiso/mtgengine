"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setGVL/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "Unlimited Edition", "2ED");
  }
}

module.exports = BadMoon;
