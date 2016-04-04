"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setARC/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor(game) {
    super(game, "Sign in Blood", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SigninBlood;
