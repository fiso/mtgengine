"use strict";
const Constants = require ("../../../Constants");
const GreatOakGuardianBase = require("../setCMA/GreatOakGuardian");

class GreatOakGuardian extends GreatOakGuardianBase {
  constructor (game) {
    super(game, "Great Oak Guardian", "Commander 2015", "C15");
  }
}

module.exports = GreatOakGuardian;
