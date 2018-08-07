"use strict";
const Constants = require ("../../../Constants");
const VampireBase = require("../setTXLN/Vampire");

class Vampire extends VampireBase {
  constructor (game) {
    super(game, "Vampire", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = Vampire;
