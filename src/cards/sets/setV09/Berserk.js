"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCED/Berserk");

class Berserk extends BerserkBase {
  constructor (game) {
    super(game, "Berserk", "From the Vault: Exiled", "V09");
  }
}

module.exports = Berserk;
