"use strict";
const Constants = require ("../../../Constants");
const WillbenderBase = require("../setA25/Willbender");

class Willbender extends WillbenderBase {
  constructor (game) {
    super(game, "Willbender", "Friday Night Magic 2004", "F04");
  }
}

module.exports = Willbender;
