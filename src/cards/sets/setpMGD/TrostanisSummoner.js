"use strict";
const Constants = require ("../../../Constants");
const TrostanisSummonerBase = require("../setDGM/TrostanisSummoner");

class TrostanisSummoner extends TrostanisSummonerBase {
  constructor (game) {
    super(game, "Trostani's Summoner", "Magic Game Day", "pMGD");
  }
}

module.exports = TrostanisSummoner;
