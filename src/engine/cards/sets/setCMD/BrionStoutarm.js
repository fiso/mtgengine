"use strict";
const Constants = require ("../../../Constants");
const BrionStoutarmBase = require("../setA25/BrionStoutarm");

class BrionStoutarm extends BrionStoutarmBase {
  constructor (game) {
    super(game, "Brion Stoutarm", "Commander 2011", "CMD");
  }
}

module.exports = BrionStoutarm;
