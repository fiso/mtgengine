"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../setCED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor(game) {
    super(game, "Twiddle", "International Collector's Edition", "CEI");
  }
}

module.exports = Twiddle;
