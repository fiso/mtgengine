"use strict";
const Constants = require ("../../../Constants");
const BanisherPriestBase = require("../setDDO/BanisherPriest");

class BanisherPriest extends BanisherPriestBase {
  constructor (game) {
    super(game, "Banisher Priest", "Magic Online Promos", "PRM");
  }
}

module.exports = BanisherPriest;
