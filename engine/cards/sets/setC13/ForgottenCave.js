"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgottenCave extends Card {
  constructor(game) {
    super(game, "Forgotten Cave", "Commander 2013 Edition", "C13");
  }
}

module.exports = ForgottenCave;
