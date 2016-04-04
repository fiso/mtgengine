"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrionStoutarmBase = require("../setLRW/BrionStoutarm.js");

class BrionStoutarm extends BrionStoutarmBase {
  constructor(game) {
    super(game, "Brion Stoutarm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BrionStoutarm;
