"use strict";
const Constants = require ("../../../Constants");
const ManabondBase = require("../setTPR/Manabond");

class Manabond extends ManabondBase {
  constructor (game) {
    super(game, "Manabond", "Exodus", "EXO");
  }
}

module.exports = Manabond;
