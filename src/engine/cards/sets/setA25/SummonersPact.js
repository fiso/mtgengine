"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonersPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoner's Pact", "Masters 25", "A25");
  }
}

module.exports = SummonersPact;
