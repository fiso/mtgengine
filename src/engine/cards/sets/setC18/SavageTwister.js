"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageTwister extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Twister", "Commander 2018", "C18");
  }
}

module.exports = SavageTwister;
