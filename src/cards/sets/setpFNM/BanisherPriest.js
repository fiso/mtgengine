"use strict";
const Constants = require ("../../../Constants");
const BanisherPriestBase = require("../setDDO/BanisherPriest");

class BanisherPriest extends BanisherPriestBase {
  constructor (game) {
    super(game, "Banisher Priest", "Friday Night Magic", "pFNM");
  }
}

module.exports = BanisherPriest;
