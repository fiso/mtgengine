"use strict";
const Constants = require ("../../../Constants");
const ChampionofWitsBase = require("../setHOU/ChampionofWits");

class ChampionofWits extends ChampionofWitsBase {
  constructor (game) {
    super(game, "Champion of Wits", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ChampionofWits;
