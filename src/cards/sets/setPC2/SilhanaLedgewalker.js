"use strict";
const Constants = require ("../../../Constants");
const SilhanaLedgewalkerBase = require("../setGPT/SilhanaLedgewalker");

class SilhanaLedgewalker extends SilhanaLedgewalkerBase {
  constructor (game) {
    super(game, "Silhana Ledgewalker", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SilhanaLedgewalker;
