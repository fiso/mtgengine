"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setCM2/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Magic 2015", "M15");
  }
}

module.exports = SigninBlood;
