"use strict";
const Constants = require ("../../../Constants");
const ForgottenAncientBase = require("../setCM2/ForgottenAncient");

class ForgottenAncient extends ForgottenAncientBase {
  constructor (game) {
    super(game, "Forgotten Ancient", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ForgottenAncient;
