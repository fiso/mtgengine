"use strict";
const Constants = require ("../../../Constants");
const GoatBase = require("../setTCM2/Goat");

class Goat extends GoatBase {
  constructor (game) {
    super(game, "Goat", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Goat;
