"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setATH/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, "Black Knight", "Masters Edition IV", "ME4");
  }
}

module.exports = BlackKnight;
