"use strict";
const Constants = require ("../../../Constants");
const GoatBase = require("../setTCM2/Goat");

class Goat extends GoatBase {
  constructor (game) {
    super(game, "Goat", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Goat;
