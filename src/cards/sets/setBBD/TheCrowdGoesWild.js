"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheCrowdGoesWild extends UnimplementedCard {
  constructor (game) {
    super(game, "The Crowd Goes Wild", "Battlebond", "BBD");
  }
}

module.exports = TheCrowdGoesWild;
