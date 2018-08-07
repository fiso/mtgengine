"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonersEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoner's Egg", "Fifth Dawn", "5DN");
  }
}

module.exports = SummonersEgg;
