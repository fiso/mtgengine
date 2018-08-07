"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastWithin extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast Within", "Battlebond", "BBD");
  }
}

module.exports = BeastWithin;
