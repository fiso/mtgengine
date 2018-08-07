"use strict";
const Constants = require ("../../../Constants");
const WillbenderBase = require("../setA25/Willbender");

class Willbender extends WillbenderBase {
  constructor (game) {
    super(game, "Willbender", "Magic Online Promos", "PRM");
  }
}

module.exports = Willbender;
