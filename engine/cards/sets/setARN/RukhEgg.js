"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RukhEgg extends Card {
  constructor(game) {
    super(game, "Rukh Egg", "Arabian Nights", "ARN");
  }
}

module.exports = RukhEgg;
