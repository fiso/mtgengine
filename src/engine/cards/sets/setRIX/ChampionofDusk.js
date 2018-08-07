"use strict";
const Constants = require ("../../../Constants");
const ChampionofDuskBase = require("../setPRIX/ChampionofDusk");

class ChampionofDusk extends ChampionofDuskBase {
  constructor (game) {
    super(game, "Champion of Dusk", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ChampionofDusk;
