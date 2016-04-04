"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SummonersPactBase = require("../setFUT/SummonersPact.js");

class SummonersPact extends SummonersPactBase {
  constructor(game) {
    super(game, "Summoner's Pact", "Modern Masters", "MMA");
  }
}

module.exports = SummonersPact;
