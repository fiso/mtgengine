"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setME4/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, "Black Knight", "Fourth Edition", "4ED");
  }
}

module.exports = BlackKnight;
