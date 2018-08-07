"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Lizard", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Lizard;
