"use strict";
const Constants = require ("../../../Constants");
const ForgottenCaveBase = require("../setC13/ForgottenCave");

class ForgottenCave extends ForgottenCaveBase {
  constructor (game) {
    super(game, "Forgotten Cave", "Onslaught", "ONS");
  }
}

module.exports = ForgottenCave;
