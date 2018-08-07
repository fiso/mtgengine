"use strict";
const Constants = require ("../../../Constants");
const SigninBloodBase = require("../setCM2/SigninBlood");

class SigninBlood extends SigninBloodBase {
  constructor (game) {
    super(game, "Sign in Blood", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = SigninBlood;
