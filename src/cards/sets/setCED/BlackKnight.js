"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setME4/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, "Black Knight", "Collectors’ Edition", "CED");
  }
}

module.exports = BlackKnight;
