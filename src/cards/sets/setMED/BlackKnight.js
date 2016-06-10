"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setATH/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, "Black Knight", "Masters Edition", "MED");
  }
}

module.exports = BlackKnight;
