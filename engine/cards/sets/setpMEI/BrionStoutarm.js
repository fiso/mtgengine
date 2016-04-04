"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrionStoutarmBase = require("../setLRW/BrionStoutarm.js");

class BrionStoutarm extends BrionStoutarmBase {
  constructor(game) {
    super(game, "Brion Stoutarm", "Media Inserts", "pMEI");
  }
}

module.exports = BrionStoutarm;
