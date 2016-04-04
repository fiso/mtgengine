"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigninBloodBase = require("../setARC/SigninBlood.js");

class SigninBlood extends SigninBloodBase {
  constructor(game) {
    super(game, "Sign in Blood", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SigninBlood;
