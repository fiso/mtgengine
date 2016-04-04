"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionofLambholt extends Card {
  constructor(game) {
    super(game, "Champion of Lambholt", "Avacyn Restored", "AVR");
  }
}

module.exports = ChampionofLambholt;
