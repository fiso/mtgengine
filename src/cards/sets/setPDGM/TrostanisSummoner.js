"use strict";
const Constants = require ("../../../Constants");
const TrostanisSummonerBase = require("../setDGM/TrostanisSummoner");

class TrostanisSummoner extends TrostanisSummonerBase {
  constructor (game) {
    super(game, "Trostani's Summoner", "Dragon's Maze Promos", "PDGM");
  }
}

module.exports = TrostanisSummoner;
