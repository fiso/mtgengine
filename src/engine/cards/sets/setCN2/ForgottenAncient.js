"use strict";
const Constants = require ("../../../Constants");
const ForgottenAncientBase = require("../setCM2/ForgottenAncient");

class ForgottenAncient extends ForgottenAncientBase {
  constructor (game) {
    super(game, "Forgotten Ancient", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ForgottenAncient;
