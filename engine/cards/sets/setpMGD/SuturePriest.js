"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuturePriest extends Card {
  constructor(game) {
    super(game, "Suture Priest", "Magic Game Day", "pMGD");
  }
}

module.exports = SuturePriest;
