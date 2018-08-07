"use strict";
const Constants = require ("../../../Constants");
const SummonersBaneBase = require("../setDDM/SummonersBane");

class SummonersBane extends SummonersBaneBase {
  constructor (game) {
    super(game, "Summoner's Bane", "Zendikar", "ZEN");
  }
}

module.exports = SummonersBane;
