"use strict";
const Constants = require ("../../../Constants");
const BanisherPriestBase = require("../setDDO/BanisherPriest");

class BanisherPriest extends BanisherPriestBase {
  constructor (game) {
    super(game, "Banisher Priest", "Friday Night Magic 2014", "F14");
  }
}

module.exports = BanisherPriest;
