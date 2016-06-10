"use strict";
const Constants = require ("../../../Constants");
const BrionStoutarmBase = require("../setLRW/BrionStoutarm");

class BrionStoutarm extends BrionStoutarmBase {
  constructor (game) {
    super(game, "Brion Stoutarm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BrionStoutarm;
