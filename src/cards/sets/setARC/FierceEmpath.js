"use strict";
const Constants = require ("../../../Constants");
const FierceEmpathBase = require("../setDDU/FierceEmpath");

class FierceEmpath extends FierceEmpathBase {
  constructor (game) {
    super(game, "Fierce Empath", "Archenemy", "ARC");
  }
}

module.exports = FierceEmpath;
