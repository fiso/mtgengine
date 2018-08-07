"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Assassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Assassin", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Assassin;
