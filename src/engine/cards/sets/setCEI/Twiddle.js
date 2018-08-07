"use strict";
const Constants = require ("../../../Constants");
const TwiddleBase = require("../set8ED/Twiddle");

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, "Twiddle", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Twiddle;
