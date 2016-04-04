"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setARC/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor(game) {
    super(game, "Sign in Blood", "Commander 2014", "C14");
  }
}

module.exports = SigninBlood;
