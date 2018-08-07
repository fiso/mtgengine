"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageSummoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Summoning", "Magic 2014", "M14");
  }
}

module.exports = SavageSummoning;
