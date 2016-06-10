"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonersPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoner's Pact", "Future Sight", "FUT");
  }
}

module.exports = SummonersPact;
