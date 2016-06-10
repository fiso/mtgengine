"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofArashin extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Arashin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ChampionofArashin;
