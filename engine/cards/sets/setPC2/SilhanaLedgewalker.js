"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilhanaLedgewalkerBase = require("../setGPT/SilhanaLedgewalker.js");

class SilhanaLedgewalker extends SilhanaLedgewalkerBase {
  constructor(game) {
    super(game, "Silhana Ledgewalker", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SilhanaLedgewalker;
