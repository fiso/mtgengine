"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../setCED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, "Twiddle", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = Twiddle;
