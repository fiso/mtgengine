"use strict";
const Constants = require ("../../../Constants");
const SummonersPactBase = require("../setA25/SummonersPact");

class SummonersPact extends SummonersPactBase {
  constructor (game) {
    super(game, "Summoner's Pact", "Modern Masters", "MMA");
  }
}

module.exports = SummonersPact;
