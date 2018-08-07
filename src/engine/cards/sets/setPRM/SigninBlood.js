"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setCM2/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Magic Online Promos", "PRM");
  }
}

module.exports = SigninBlood;
