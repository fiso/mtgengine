"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../set8ED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, "Twiddle", "Fifth Edition", "5ED");
  }
}

module.exports = Twiddle;
