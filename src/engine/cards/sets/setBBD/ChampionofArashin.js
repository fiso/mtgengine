"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofArashin extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Arashin", "Battlebond", "BBD");
  }
}

module.exports = ChampionofArashin;
