"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecoratedChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Decorated Champion", "Battlebond", "BBD");
  }
}

module.exports = DecoratedChampion;
