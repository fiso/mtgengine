"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrogLizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Frog Lizard", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = FrogLizard;
