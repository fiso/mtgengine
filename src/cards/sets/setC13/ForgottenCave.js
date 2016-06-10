"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenCave extends UnimplementedCard {
  constructor (game) {
    super(game, "Forgotten Cave", "Commander 2013 Edition", "C13");
  }
}

module.exports = ForgottenCave;
