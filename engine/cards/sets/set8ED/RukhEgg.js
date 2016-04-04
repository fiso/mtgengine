"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RukhEggBase = require("../setARN/RukhEgg.js");

class RukhEgg extends RukhEggBase {
  constructor(game) {
    super(game, "Rukh Egg", "Eighth Edition", "8ED");
  }
}

module.exports = RukhEgg;
