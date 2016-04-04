"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setATH/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor(game) {
    super(game, "Black Knight", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlackKnight;
