"use strict";
const Constants = require ("../../../Constants");
const KnightBase = require("../setTM19/Knight");

class Knight extends KnightBase {
  constructor (game) {
    super(game, "Knight", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Knight;
