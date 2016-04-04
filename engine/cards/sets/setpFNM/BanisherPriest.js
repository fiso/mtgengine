"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BanisherPriestBase = require("../setDDO/BanisherPriest.js");

class BanisherPriest extends BanisherPriestBase {
  constructor(game) {
    super(game, "Banisher Priest", "Friday Night Magic", "pFNM");
  }
}

module.exports = BanisherPriest;
