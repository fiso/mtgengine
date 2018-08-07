"use strict";
const Constants = require ("../../../Constants");
const TrostanisSummonerBase = require("../setDGM/TrostanisSummoner");

class TrostanisSummoner extends TrostanisSummonerBase {
  constructor (game) {
    super(game, "Trostani's Summoner", "Magic Online Promos", "PRM");
  }
}

module.exports = TrostanisSummoner;
