"use strict";
const Constants = require ("../../../Constants");
const ChampionofStraySoulsBase = require("../setCMA/ChampionofStraySouls");

class ChampionofStraySouls extends ChampionofStraySoulsBase {
  constructor (game) {
    super(game, "Champion of Stray Souls", "Born of the Gods", "BNG");
  }
}

module.exports = ChampionofStraySouls;
