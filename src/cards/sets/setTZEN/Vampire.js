"use strict";
const Constants = require ("../../../Constants");
const VampireBase = require("../setTXLN/Vampire");

class Vampire extends VampireBase {
  constructor (game) {
    super(game, "Vampire", "Zendikar Tokens", "TZEN");
  }
}

module.exports = Vampire;
