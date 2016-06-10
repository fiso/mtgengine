"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setARC/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Magic Player Rewards", "pMPR");
  }
}

module.exports = SigninBlood;
