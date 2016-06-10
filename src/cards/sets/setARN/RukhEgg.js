"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RukhEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Rukh Egg", "Arabian Nights", "ARN");
  }
}

module.exports = RukhEgg;
