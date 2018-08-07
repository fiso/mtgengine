"use strict";
const Constants = require ("../../../Constants");
const ChampionofArashinBase = require("../setBBD/ChampionofArashin");

class ChampionofArashin extends ChampionofArashinBase {
  constructor (game) {
    super(game, "Champion of Arashin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ChampionofArashin;
