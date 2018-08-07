"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BonusRound extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonus Round", "Battlebond", "BBD");
  }
}

module.exports = BonusRound;
