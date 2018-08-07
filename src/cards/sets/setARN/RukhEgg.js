"use strict";
const Constants = require ("../../../Constants");
const RukhEggBase = require("../set9ED/RukhEgg");

class RukhEgg extends RukhEggBase {
  constructor (game) {
    super(game, "Rukh Egg", "Arabian Nights", "ARN");
  }
}

module.exports = RukhEgg;
