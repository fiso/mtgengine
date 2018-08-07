"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenCave extends UnimplementedCard {
  constructor (game) {
    super(game, "Forgotten Cave", "Commander 2018", "C18");
  }
}

module.exports = ForgottenCave;
