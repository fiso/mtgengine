"use strict";
const Constants = require ("../../../Constants");
const KnightBase = require("../setTM19/Knight");

class Knight extends KnightBase {
  constructor (game) {
    super(game, "Knight", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Knight;
