"use strict";
const Constants = require ("../../../Constants");
const FierceEmpathBase = require("../setDDU/FierceEmpath");

class FierceEmpath extends FierceEmpathBase {
  constructor (game) {
    super(game, "Fierce Empath", "Commander 2011", "CMD");
  }
}

module.exports = FierceEmpath;
