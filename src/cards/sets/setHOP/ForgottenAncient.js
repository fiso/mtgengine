"use strict";
const Constants = require ("../../../Constants");
const ForgottenAncientBase = require("../setARC/ForgottenAncient");

class ForgottenAncient extends ForgottenAncientBase {
  constructor (game) {
    super(game, "Forgotten Ancient", "Planechase", "HOP");
  }
}

module.exports = ForgottenAncient;
