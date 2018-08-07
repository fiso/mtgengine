"use strict";
const Constants = require ("../../../Constants");
const ForgottenCaveBase = require("../setC18/ForgottenCave");

class ForgottenCave extends ForgottenCaveBase {
  constructor (game) {
    super(game, "Forgotten Cave", "Commander 2011", "CMD");
  }
}

module.exports = ForgottenCave;
