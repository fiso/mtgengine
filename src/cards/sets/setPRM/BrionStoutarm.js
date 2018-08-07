"use strict";
const Constants = require ("../../../Constants");
const BrionStoutarmBase = require("../setA25/BrionStoutarm");

class BrionStoutarm extends BrionStoutarmBase {
  constructor (game) {
    super(game, "Brion Stoutarm", "Magic Online Promos", "PRM");
  }
}

module.exports = BrionStoutarm;
