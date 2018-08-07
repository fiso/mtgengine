"use strict";
const Constants = require ("../../../Constants");
const RukhEggBase = require("../set9ED/RukhEgg");

class RukhEgg extends RukhEggBase {
  constructor (game) {
    super(game, "Rukh Egg", "Eighth Edition", "8ED");
  }
}

module.exports = RukhEgg;
