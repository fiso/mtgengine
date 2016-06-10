"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../setCED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, "Twiddle", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Twiddle;
