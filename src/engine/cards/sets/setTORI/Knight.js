"use strict";
const Constants = require ("../../../Constants");
const KnightBase = require("../setTM19/Knight");

class Knight extends KnightBase {
  constructor (game) {
    super(game, "Knight", "Magic Origins Tokens", "TORI");
  }
}

module.exports = Knight;
