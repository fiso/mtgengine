"use strict";
const Constants = require ("../../../Constants");
const FierceEmpathBase = require("../setARC/FierceEmpath");

class FierceEmpath extends FierceEmpathBase {
  constructor(game) {
    super(game, "Fierce Empath", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FierceEmpath;
