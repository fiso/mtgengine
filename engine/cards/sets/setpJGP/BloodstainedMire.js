"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodstainedMire extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodstained Mire", "Judge Gift Program", "pJGP");
  }
}

module.exports = BloodstainedMire;
