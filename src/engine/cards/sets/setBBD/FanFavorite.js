"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FanFavorite extends UnimplementedCard {
  constructor (game) {
    super(game, "Fan Favorite", "Battlebond", "BBD");
  }
}

module.exports = FanFavorite;
