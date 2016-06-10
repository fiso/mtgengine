"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalking Tiger", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StalkingTiger;
