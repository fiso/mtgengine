"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RukhEggBase = require("../setARN/RukhEgg.js");

class RukhEgg extends RukhEggBase {
  constructor(game) {
    super(game, "Rukh Egg", "Release Events", "pREL");
  }
}

module.exports = RukhEgg;
