"use strict";
const Constants = require ("../../../Constants");
const TilonallisSummonerBase = require("../setPRIX/TilonallisSummoner");

class TilonallisSummoner extends TilonallisSummonerBase {
  constructor (game) {
    super(game, "Tilonalli's Summoner", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TilonallisSummoner;
