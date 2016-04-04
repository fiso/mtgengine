"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrostanisSummonerBase = require("../setDGM/TrostanisSummoner.js");

class TrostanisSummoner extends TrostanisSummonerBase {
  constructor(game) {
    super(game, "Trostani's Summoner", "Magic Game Day", "pMGD");
  }
}

module.exports = TrostanisSummoner;
