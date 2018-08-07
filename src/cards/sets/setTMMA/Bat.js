"use strict";
const Constants = require ("../../../Constants");
const BatBase = require("../setTM19/Bat");

class Bat extends BatBase {
  constructor (game) {
    super(game, "Bat", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = Bat;
