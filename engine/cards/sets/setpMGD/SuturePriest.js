"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuturePriest extends UnimplementedCard {
  constructor(game) {
    super(game, "Suture Priest", "Magic Game Day", "pMGD");
  }
}

module.exports = SuturePriest;
