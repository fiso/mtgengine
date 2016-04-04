"use strict";
const Constants = require ("../../../Constants");
const CharBase = require("../setp15A/Char");

class Char extends CharBase {
  constructor(game) {
    super(game, "Char", "From the Vault: Twenty", "V13");
  }
}

module.exports = Char;
