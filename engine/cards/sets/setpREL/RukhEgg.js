"use strict";
const Constants = require ("../../../Constants");
const RukhEggBase = require("../setARN/RukhEgg");

class RukhEgg extends RukhEggBase {
  constructor(game) {
    super(game, "Rukh Egg", "Release Events", "pREL");
  }
}

module.exports = RukhEgg;
