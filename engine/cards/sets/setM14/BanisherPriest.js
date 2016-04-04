"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BanisherPriestBase = require("../setDDO/BanisherPriest.js");

class BanisherPriest extends BanisherPriestBase {
  constructor(game) {
    super(game, "Banisher Priest", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BanisherPriest;
