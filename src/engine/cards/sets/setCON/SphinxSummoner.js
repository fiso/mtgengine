"use strict";
const Constants = require ("../../../Constants");
const SphinxSummonerBase = require("../setC16/SphinxSummoner");

class SphinxSummoner extends SphinxSummonerBase {
  constructor (game) {
    super(game, "Sphinx Summoner", "Conflux", "CON");
  }
}

module.exports = SphinxSummoner;
