"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofLambholt extends UnimplementedCard {
  constructor(game) {
    super(game, "Champion of Lambholt", "Avacyn Restored", "AVR");
  }
}

module.exports = ChampionofLambholt;
