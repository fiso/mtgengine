"use strict";
const Constants = require ("../../../Constants");
const BadMoonBase = require("../setGVL/BadMoon");

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, "Bad Moon", "Commander 2014", "C14");
  }
}

module.exports = BadMoon;
