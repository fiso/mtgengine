"use strict";
const Constants = require ("../../../Constants");
const RukhEggBase = require("../set9ED/RukhEgg");

class RukhEgg extends RukhEggBase {
  constructor (game) {
    super(game, "Rukh Egg", "Release Events", "PREL");
  }
}

module.exports = RukhEgg;
