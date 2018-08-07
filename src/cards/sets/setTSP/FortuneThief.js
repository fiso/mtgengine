"use strict";
const Constants = require ("../../../Constants");
const FortuneThiefBase = require("../setA25/FortuneThief");

class FortuneThief extends FortuneThiefBase {
  constructor (game) {
    super(game, "Fortune Thief", "Time Spiral", "TSP");
  }
}

module.exports = FortuneThief;
