"use strict";
const Constants = require ("../../../Constants");
const VampireBase = require("../setTXLN/Vampire");

class Vampire extends VampireBase {
  constructor (game) {
    super(game, "Vampire", "Dark Ascension Tokens", "TDKA");
  }
}

module.exports = Vampire;
