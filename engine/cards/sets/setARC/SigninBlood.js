"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigninBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Sign in Blood", "Archenemy", "ARC");
  }
}

module.exports = SigninBlood;
