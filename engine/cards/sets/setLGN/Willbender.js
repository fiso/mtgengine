"use strict";
const Constants = require ("../../../Constants");
const WillbenderBase = require("../setC14/Willbender");

class Willbender extends WillbenderBase {
  constructor(game) {
    super(game, "Willbender", "Legions", "LGN");
  }
}

module.exports = Willbender;
