"use strict";
const Constants = require ("../../../Constants");
const GoatBase = require("../setTCM2/Goat");

class Goat extends GoatBase {
  constructor (game) {
    super(game, "Goat", "Magic 2013 Tokens", "TM13");
  }
}

module.exports = Goat;
