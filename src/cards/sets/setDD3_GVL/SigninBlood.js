"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setARC/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SigninBlood;
