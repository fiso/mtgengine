"use strict";
const Constants = require ("../../../Constants");
const ForgottenAncientBase = require("../setCM2/ForgottenAncient");

class ForgottenAncient extends ForgottenAncientBase {
  constructor (game) {
    super(game, "Forgotten Ancient", "Commander 2015", "C15");
  }
}

module.exports = ForgottenAncient;
