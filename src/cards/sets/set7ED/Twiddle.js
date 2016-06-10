"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../setCED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, "Twiddle", "Seventh Edition", "7ED");
  }
}

module.exports = Twiddle;
