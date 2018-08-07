"use strict";
const Constants = require ("../../../Constants");
const KnightBase = require("../setTM19/Knight");

class Knight extends KnightBase {
  constructor (game) {
    super(game, "Knight", "Dominaria Tokens", "TDOM");
  }
}

module.exports = Knight;
