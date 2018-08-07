"use strict";
const Constants = require ("../../../Constants");
const HorrorBase = require("../setTC18/Horror");

class Horror extends HorrorBase {
  constructor (game) {
    super(game, "Horror", "Archenemy: Nicol Bolas Tokens", "TE01");
  }
}

module.exports = Horror;
