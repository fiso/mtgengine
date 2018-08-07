"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BullRushBruiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Bull-Rush Bruiser", "Battlebond", "BBD");
  }
}

module.exports = BullRushBruiser;
