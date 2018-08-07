"use strict";
const Constants = require ("../../../Constants");
const FierceEmpathBase = require("../setDDU/FierceEmpath");

class FierceEmpath extends FierceEmpathBase {
  constructor (game) {
    super(game, "Fierce Empath", "Masters 25", "A25");
  }
}

module.exports = FierceEmpath;
