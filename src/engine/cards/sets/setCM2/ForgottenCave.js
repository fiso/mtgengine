"use strict";
const Constants = require ("../../../Constants");
const ForgottenCaveBase = require("../setC18/ForgottenCave");

class ForgottenCave extends ForgottenCaveBase {
  constructor (game) {
    super(game, "Forgotten Cave", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ForgottenCave;
