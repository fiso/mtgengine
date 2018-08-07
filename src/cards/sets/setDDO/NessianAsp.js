"use strict";
const Constants = require ("../../../Constants");
const NessianAspBase = require("../setCN2/NessianAsp");

class NessianAsp extends NessianAspBase {
  constructor (game) {
    super(game, "Nessian Asp", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NessianAsp;
