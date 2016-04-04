"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../setCED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor(game) {
    super(game, "Twiddle", "Fourth Edition", "4ED");
  }
}

module.exports = Twiddle;
