"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setCM2/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = SigninBlood;
