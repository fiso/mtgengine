"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummonersPact extends Card {
  constructor(game) {
    super(game, "Summoner's Pact", "Future Sight", "FUT");
  }
}

module.exports = SummonersPact;
