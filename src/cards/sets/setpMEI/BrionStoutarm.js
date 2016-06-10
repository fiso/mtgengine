"use strict";
const Constants = require ("../../../Constants");
const BrionStoutarmBase = require("../setLRW/BrionStoutarm");

class BrionStoutarm extends BrionStoutarmBase {
  constructor (game) {
    super(game, "Brion Stoutarm", "Media Inserts", "pMEI");
  }
}

module.exports = BrionStoutarm;
