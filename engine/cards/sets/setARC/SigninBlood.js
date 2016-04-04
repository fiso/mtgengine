"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigninBlood extends Card {
  constructor(game) {
    super(game, "Sign in Blood", "Archenemy", "ARC");
  }
}

module.exports = SigninBlood;
