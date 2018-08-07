"use strict";
const Constants = require ("../../../Constants");
const SolidarityofHeroesBase = require("../setCM2/SolidarityofHeroes");

class SolidarityofHeroes extends SolidarityofHeroesBase {
  constructor (game) {
    super(game, "Solidarity of Heroes", "Journey into Nyx", "JOU");
  }
}

module.exports = SolidarityofHeroes;
